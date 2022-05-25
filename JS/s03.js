// 아메리카노: 4000원
// 라떼: 4500원
// 카푸치노: 4500원
// 쿠키 : 3000원
// 1.아메리카노 3잔, 쿠키 2개
// 2.아케리카노 2잔, 라떼 2잔, 쿠키 2개
// 3.아케리카노 2잔, 라떼 2잔, 카푸치노 3잔, 쿠키 4개
console.log(4000 * 3 + 3000 * 2);
console.log(4000 * 2 + 4500 * 2 + 3000 * 2);
console.log(4000 * 2 + 4500 * 2 + 4500 * 3 + 3000 * 4);
// 위와 같이 작성된 코드의 단점
// -오타 발생하기 쉬움
// -오타가 발생되면 다른 코드에 대한 신뢰도 사라지기 때문에 전체적인 검수가 들어갈 수 밖에 없다.
// -해당 숫자들이 가지는 의미를 나만 알고 있기 때문에 다른 사람과 협업하기 위해서는 각 숫자가 가지는 의미를 일일이 설명 해놓아야한다.
// -만약 가격의 변동이 생긴다면 해당가격의 정보를 알아내서 하나하나 수정해주어야한다.

// 아메리카노: 4000원
// 라떼: 4500원
// 카푸치노: 4500원
// 쿠키 : 3000원
let americano = 4000;
let latte = 4500;
let cappuccino = 4500;
let cookie = 3000;
// 1.아메리카노 3잔, 쿠키 2개
// 2.아케리카노 2잔, 라떼 2잔, 쿠키 2개
// 3.아케리카노 2잔, 라떼 2잔, 카푸치노 3잔, 쿠키 4개
console.log(americano * 3 + cookie * 2);
console.log(americano * 2 + latte * 2 + cookie * 2);
console.log(americano * 2 + latte * 2 + cappuccino * 3 + cookie * 4);

americano = 4300;

console.log(americano * 3 + cookie * 2);
console.log(americano * 2 + latte * 2 + cookie * 2);
console.log(americano * 2 + latte * 2 + cappuccino * 3 + cookie * 4);
console.log('');

const CUP = 10000;
// const는 상수의 선언에 사용된다. 변수가 되면 아래의 값은 오류가 되어버린다. 선언과 동시에 초기화를 시켜주어야한다. 초기화 시키지 않으면 전체적인 오류로 이어진다.

console.log(CUP * 2 + americano * 2);
// 나이계산기
//지금 년도 : currntYear
// 내가 태어난 년도-BIRTH_YEAR 상수로 선언해야하므로 모두 대문자로 사용하는게 옳다
// 결과 값을 저장할 변수 : currentAge
let currentYear = 2022;
const BIRTH_YEAR = 1997;
let currentAge = currentYear - BIRTH_YEAR + 1;
console.log(currentAge);

console.log('');
console.log('');
// var를 쓰지않고 let을 쓰는 이유- Hosting
// 호이스팅 : JavaScript가 .js문서를 읽어들일 때에, 변수나 함수, 상수 같은 것들을 먼저 읽어들여서 메모리에 저장해두는 일련의 행위를 의미한다.
console.log(first);
var first = 38120;
console.log(first);
var first = 5;
console.log(first);
// var로 선언된 변수는 호이스팅 후 선언 이전에 호출이 되어도 undefined라는 값을 출력할 뿐 오류를 일으키지 않는다. 안정성이 떨어진다.
// let로 선언된 변수는 호이스팅 후 선언 이전에 호출이 되어지면 그 부분에 오류를 일으킨다. 안정성이 높아진다.

// var로 선언된 변수는 최초 초기화 이 후에 다시 선언 및 초기화 (중복 선언)가 되어지면 마지막에 초기화 한 값으로 진행이 되어진다. 오류가 일어나지 않는다. 안정성이 떨어진다.
// var로 선언된 변수는 최초 초기화 이 후에 다시 선언 및 초기화 (중복 선언)가 되어지면 파일 전체에 오류를 일으킨다. 안정성이 높아진다.

console.log('');
console.log('');
// 음료의 칼로리 계산기
// 에스프레소=10 / 우유=170 / 초코시럽=50
// 휘핑크림=60 / 아메리카노=에스프레소
// 라떼= 에스프레소 +우유
// 모카= 에스프레소 + 초코시럽 + 우유
// 휘핑모카 = 에스프레소 + 초코시럽 + 우유 + 휘핑크림
let espresso = 10;
let milk = 170;
let chocolateSyrup = 50;
let whippingCream = 60;
const AMERICANO = espresso;
const LATTE = espresso + milk;
const MOCHA = espresso + chocolateSyrup + milk;
const WHIPPING_MOCHA = espresso + chocolateSyrup + milk + whippingCream;
console.log(AMERICANO);
console.log(LATTE);
console.log(MOCHA);
console.log(WHIPPING_MOCHA);

console.log('');
console.log('');
let a = 10;
let A = 20;
console.log(a);
console.log(A);
