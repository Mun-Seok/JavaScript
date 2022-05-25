// 문제 1번
// 1부터 100까지 더하는 for문 을 만들고 그 결과를 출력해보자.
let sum = 0;
for (let i = 1; i < 101; i++) {
    sum += i;
}
console.log(sum);
console.log('');
// 문제 2번
// 1부터 100까지 홀수만 더해보자
let oddSum = 0;
for (let i = 1; i < 101; i++) {
    if (i % 2 == 1) {
        oddSum += i;
    }
}
console.log(oddSum);
console.log('');
// 문제 3번
// 1부터 50까지 369의 결과를 프른트해보자
// 1 2 짝 4 5 짝 6 7 짝 10 ..........28 짝 짝 짝 ........
for (let i = 1; i < 51; i++) {
    if (i % 10 == 3 || i % 10 == 6 || i % 10 == 9) {
        console.log('짝');
    } else if (3 <= i / 10 && i / 10 < 4) {
        console.log('짝');
    } else {
        console.log(i);
    }
}
console.log('');
for (let i = 1; i <= 50; i++) {
    let stringValue = i.toString(); //숫자를 문자열로 바꿔주는 기능
    let clap = '';
    for (let j = 0; j < stringValue.length; j++) {
        if (stringValue[j] == '3' || stringValue[j] == '6' || stringValue[j] == '9') {
            clap += '짝';
        }
    }
    console.log(clap.length > 0 ? clap : i);
}
// 문제 4번
// 주어진 숫자가 소수이면 true, 소수가 아니면 false를 출력하는 프로그램을 짜보자
// 소수 : PrimeNumber, 1과 자기자신으로만 나누어지는 수
let n = 16;
let isPrime = true;
if (n === 1) {
    isPrime = false;
} //1은 소수가 아니라 제외
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        isPrime = false;
    }
}
console.log(isPrime);
