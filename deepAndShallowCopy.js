/*  Writer: HandsomeChoco
    Date: 25, May, 2020
    Content: Learn about different between deep copy and shallow copy.
*/


/* 
   값을 복사하고 변경 했을 때, 다른 값에 전혀 영향을 주지 않는다. 
   이처럼 두 변수가 완전히 독립성을 갖을 때, 
   '값 복사' 혹은 '깊은 복사' 라고 한다.   
*/

var originalVal = 100;
var newVal = originalVal;

originalVal = 200;
console.log(originalVal); // 200
console.log(newVal); // 100

/* 
    객체에 변수를 저장하면, 실제 값이 아닌 메모리의 주소를 참조한다. 
    객체나 배열의 경우 = 를 이용해 복사하면, 참조 복사만 가능하다.
    그래서 둘 중 하나의 값을 변경하면 다른 한쪽에도 영향을 미치게 된다.
    이처럼 두 변수가 종속적일 때, '얕은 복사' 라고 한다. 
    객체나 배열을 깊은 복사 하려면 새로운 객체를 만들고, 반복문을 통해 
    원본 객체에 반복을 돌리면서, 속성들을 하나씩 복사해야 한다.

*/

var originalArr = [1, 2, 3, 4];
var newArr = originalArr;

originalArr[0] = 100;

console.log(originalArr); // [100, 2, 3, 4]
console.log(newArr); // [100, 2, 3, 4]


function cloneObj(obj) {
    var output = {};
    for(var i=0 in obj) {
        output[i]=obj[i];
    }
    return output;
}



var originalObj = { a: 10, b: 20 };
var referenced = cloneObj(originalObj);

originalObj.a = 1;

console.log(originalObj);
console.log(referenced);

/* new를 이용한 객체 복사를 = 로 수행한 결과 역시 얕은 복사 */
function Person(firstName, lastName, age, height) {
    this.name = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
}

var tony = new Person('Tony', 'Stark', 53, 173);
var tonyClone = tony;
console.log(tony);
tony.height =  '173cm';
console.log(tonyClone, tony);

module.exports;