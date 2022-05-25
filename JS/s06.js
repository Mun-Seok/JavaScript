function plus(i) {
    console.log(i + 100);
}
plus(100);
console.log('');
function welcome(name) {
    console.log('안녕하세요, ' + name + '님!');
}
welcome('허지훈');
welcome('장소영');
welcome('최이서');
welcome('최문석');
welcome(1004);
console.log('');

function printSquare(x) {
    console.log(x * x);
}
printSquare(2);
printSquare(15);
printSquare(132);
console.log('');

/* 메모리 용량 계산식 만들기 */
/* 함수 2개, teraToGiga, teraToMega
테라바이트를 기가바이트로 환산,
테라바이트를 메가바이트로 환산
3테라바이트를 환산하기
*/
function teraToGiga(i) {
    let gigaByte = i * 1024;
    console.log(i + 'TB는 ');
    console.log(gigaByte + 'GB입니다.');
}
function teraToMega(i) {
    let megaByte = i * 1024 * 1024;
    console.log(i + 'TB는 ');
    console.log(megaByte + 'MB입니다.');
}
teraToGiga(3);
teraToMega(3);
/*
1TB는
1024GB입니다
*/
console.log('');

function printSum(a, b) {
    console.log(a + b);
}
printSum(100, 100);
printSum(50, 130);

console.log('');
/*
함수 introduce를 정의하고,
매개변수 name, birth, national, job을 사용

콘솔창 예시
안녕하세요! 반갑습니다.
제 이름은 name입니다.
생년월일은 birth이고,
국적은 nation이고,
직업은 job입니다.
잘부탁드립니다!
*/
function introduce(name, birth, national, job) {
    console.log('안녕하세요! 반갑습니다.');
    console.log('제 이름은 ' + name + '입니다.');
    console.log('생년월일은 ' + birth + '이고,');
    console.log('국적은 ' + national + '이고,');
    console.log('직업은 ' + job + '입니다.');
    console.log('잘부탁드립니다!');
}

introduce('김철수', '1998.01.15', '한국', '회사원');
console.log('');
introduce('이영희', '1988.03.15', '중국', '무역 회사원');
console.log('');

/* bmi지수 */
/* 
bmi = 무게 / ((키*키) /10000)

콘솔창 예시
홀쭉이 정보 : 몸무게  42.1, 키 165
홀쭉이님의 체질량 지수는 ㅁㅁㅁ입니다.
*/
function bmi(name, weight, height) {
    let rate = weight / ((height * height) / 10000);
    console.log(name + ' 정보 : 몸무게 ' + weight + ' 키 ' + height);
    console.log(name + '님의 체질량 지수는 ' + rate + '입니다.');
}
bmi('홀쭉이', 42.1, 165);
console.log('');
bmi('통통이', 75, 159);
