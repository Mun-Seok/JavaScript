console.log(typeof 486);
/* 숫자형의 경우 Number로 출력된다. */
console.log(typeof '프론트엔드');
/* 문자형의 경우 String로 출력이 된다. */
console.log(typeof '486');
console.log('');
let a = 486;
console.log(typeof a);
/* 변수에 저장된 자료의 유형을 체크 */
console.log('');
function frontEnd() {
    console.log('Hello! World!');
}
console.log(typeof frontEnd);
/* 함수의 자료유형은 function 함수로 출력된다. */
console.log('');
console.log(typeof 4 + 3);
/* typeof 4의 자료유형이 number로 출력되고 (사칙연산보다 typeof 연산이 우선순위를 가진다.) 숫자 3이 거기에 더해진 것으로 결과값이 number3(3도 문자형)으로 출력된다. */
console.log('');
console.log(typeof (4 + 3));
/* 괄호를 사용해서 묶어두면 괄호가 우선순위를 가지기 때문에 결과값에 대한 자료유형이 출력된다. */
console.log('');
console.log(typeof 'hello' + 'world');
/* 문자형도 마찬가지, typeof 연산이 우선순위를 가진다. */
console.log(typeof ('Hello' + 'World'));
/* 문자형도 마찬가지, 괄호로 묶으면 괄호가 우선순위를 가진다. */
console.log('');
console.log(typeof 4 - 3);
/* 결과값이 NaN으로 출력된다. */
/* NaN이란?? Not a Number */
/* + 연산기호는 문자와 숫자를 결합하는 역할도 하지만, 나머지 연산기호들은 숫자끼리만 연산이 되므로, 숫자가 아닙니다. 라는 의미의 결과가 출력되는 것.*/
console.log('');
console.log(typeof true);
/* 블린형은 자료유형은 boolean이라고 출력된다. */
console.log(typeof 4 > 2);
console.log(typeof 4 < 2);
console.log(typeof 4 == false);
console.log(typeof 4 == true);
console.log(typeof 4 == 'number');
console.log(typeof 4 === 'number');
console.log(typeof (4 > 2));
