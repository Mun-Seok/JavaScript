for (let i = 0; i < 10; i++) {
    console.log('오빠!!!', i);
}
console.log('');
for (let j = 1; j <= 10; j++) {
    if (j % 2 == 0) {
        console.log('오빠!!!', j);
    }
}
// 1부터 10까지 다 해봄 -속도는 느림
console.log('');
for (let j = 2; j <= 10; j += 2) {
    console.log('오빠!!!', j);
}
console.log('');
/*
for문 중첩 이용
구구단 만들기
*/
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(i + 'X' + j + '=' + i * j);
    }
}
