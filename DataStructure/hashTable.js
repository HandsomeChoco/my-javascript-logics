/*
    해쉬함수에 대해 알아보기 전, 먼저 직접 주소 테이블에 대해서 알아보자.
    직접 주소 테이블은 입력한 값(value)이 그대로, 키(key) 가 되는 데이터 매핑 방식이다. 
    들어오는 값을 알고 있으면, 인덱스도 같이 알 수 있다 = 
    찾을 값과 테이블의 인덱스가 같기 때문에 
    저장된 공간에 바로 접근 가능. CRUD시 시간복잡도 O(1)
*/
class DirectAddressTable {
  constructor () {
    this.table = [];
  }
  
  setValue (value = -1) {
    this.table[value] = value;
  }
  
  getValue (value = -1) {
    return this.table[value];
  }
  
  getTable () {
    return this.table;
  }
}
  
const myTable = new DirectAddressTable();
myTable.setValue(3);
myTable.setValue(10);
myTable.setValue(90);
console.log(myTable.getTable()); // [ <3 empty items>, 3, <6 empty items>, 10, <79 empty items>, 90 ]
/* 
    위 테이블은 3, 10, 90번 인덱스를 제외한 나머지가 모두 0으로 채워져 있다. 
    키 값들 간의 값 차이가 크게 나면 더 많은 나머지 공간이 0으로 찰 것 이고, 
    이는 적재율의 저하를 불러온다.
*/

/*
    직접 주소 테이블은 값에 접근하기 편하나, 입력된 값공간 효율이 좋지 않다. 
    이 단점을 해결한 자료구조가 해시 테이블이다. 
    해시 테이블은 넣은 값을, 해시 함수를 한번 거쳐 키로 사용한다. 
    해시 함수는 임의이 길이를 가지는 임의의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다.
    이 때 함수에서 나온 결과물이 해시이다. 
*/

function hashFunction (key) {
  return key % 10;
}
/* 
    입력값을 10으로 나눈 나머지를 리턴하는 간단한 해시 함수이다.
    어떤 입력값이 들어오든 반환되는 값은 무조건 0~9 사이이다. 
    또한 해싱 된 결과를 보고 어떤 값을 입력으로 받았는지 추측하기 힘들기 때문에
    암호학에서도 사랑 받는 자료구조이다.
    여기서 중요한건 암호학이 아닌 반환되는 값이 무조건 0~9 사이라는 점이다.
*/

console.log(hashFunction(102948)); // 8
console.log(hashFunction(191919191)); // 1
console.log(hashFunction(13)); // 3
console.log(hashFunction(997)); // 7

/*
    앞서 이야기 한 직접 주소 테이블의 경우 10000 이라는 값이 들어오면 9999번째 인덱스에 값을 저장하기 위해 
    10000의 크기를 가진 테이블을 생성하기 때문에 나머지 9999 개의 버리는 공간이 생기게 된다.
    그러나 해시 함수를 사용하면 값 100이 들어오면 0, 10001이 들어오면 1, 어떤 값이 들어와도 0~9를 반환하게 된다.
    
    이렇게 되면 고정된 테이블의 길이를 정해둘 수 있고 그 안에만 데이터를 저장할 수 있게 된다.
    해시 함수의 이런 특징을 이용해 간단한 해시 테이블을 만들었다.
*/


const myTableSize = 5; // 해시 테이블 크기 5 고정
const myHashTable = new Array(myTableSize);

function hashFunction (key) {
  // 아규먼트를 테이블의 크기로 나눠주고 나머지를 리턴
  return key % myTableSize;
}

myHashTable[hashFunction(1991)] = 1991; // 1991%5 = 1
myHashTable[hashFunction(1234)] = 1234; // 1234%5 = 4
myHashTable[hashFunction(5678)] = 5678; // 5678%5 = 3

console.log(myHashTable); // [empty, 1991, empty, 5678, 1234]

/* 
    들어온 값이 엄청나게 크지만, 함수를 통해 들어온 값을 5로 나눈 나머지를 리턴해 
    인덱스로 주고, 입력한 값을 다시 할당했기 때문에, 해시 테이블에 값이 저장된다. 
*/