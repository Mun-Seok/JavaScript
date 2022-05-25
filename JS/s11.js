console.log(5 > 2);
console.log(5 < 2);
console.log(5 == 2);
console.log('2' == 2);
console.log('2' === 2);
/*비교연산자 ==은 내용이 같으면 같다고 인식한다.
===은 자료형까지 같아야 같다고 인식한다. */
console.log('');
console.log('10' + '15');
console.log(Number('10') + Number('5'));
console.log('');
console.log(24 + 6);
console.log(String(24) + String(6));
console.log('');
let x = 123;
console.log(x);
console.log(String(x));
console.log(typeof x);
console.log(typeof String(x));
console.log('');
let y = true;
console.log(y);
console.log(String(y));
console.log(typeof y);
console.log(typeof String(y));
console.log('');
let z = '프론트엔드';
console.log(z);
console.log(Number(z));
console.log(typeof z);
console.log(typeof Number(z));
/* '프론트엔드라는 문자형을 숫자로 변환해서 표현할 수 없기 때문에 NaN이라고 표현은 되지만, 자료형 자체는 숫자형으로 바뀐 것을 확인할 수 있다. */
console.log('');
let h = true;
console.log(h);
console.log(Number(h));
console.log(typeof h);
console.log(typeof Number(h));
/* 블린형은 숫자형으로 바꾸면 true는 1, false는 0으로 출력된다. */
console.log('');
let i = 'frontEnd';
console.log(i);
console.log(Boolean(i));
console.log('');
/* 문자형을 블린형으로 바꾸면 true가 출력된다. */
let j = 123;
console.log(j);
console.log(Boolean(j));
console.log('');
/* 숫자형을 블린형으로 바꾸면 true가 출력된다. */
let a = '';
let b = 0;
let c = Number('frontEnd');
console.log(Boolean(a));
console.log(Boolean(b));
console.log(Boolean(c));
/* 위에 a,b,c의 세가지 경우를 제외한 나머지 경우는 블린형으로 반환시 true가 출력된다. */
console.log('');
let plusA = 10;
console.log((plusA += 10));
// console.log((plusA = plusA + 10));
