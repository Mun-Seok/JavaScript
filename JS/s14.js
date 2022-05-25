let age = 19;
if (age > 20) {
    console.log('운전면허 취득이 가능합니다.');
} else {
    console.log('운전면허 취득이 불가능합니다.');
}
console.log('');
let age1 = 19;
if (age1 > 20) {
    console.log('운전면허 취득이 가능합니다.');
} else if (age1 >= 18) {
    console.log('오토바이 운전면허 취득이 가능합니다.');
} else {
    console.log('운전면허 취득이 불가능합니다.');
}
console.log('');
let age2 = 21;
if (age2 >= 18) {
    console.log('오토바이 운전면허 취득이 가능합니다.');
} else if (age2 > 20) {
    console.log('운전면허 취득이 가능합니다.');
} else {
    console.log('운전면허 취득이 불가능합니다.');
}
console.log('');
let age3 = 21;
if (18 <= age3 && age3 < 20) {
    console.log('오토바이 운전면허 취득이 가능합니다.');
} else if (age3 > 20) {
    console.log('운전면허 취득이 가능합니다.');
} else {
    console.log('운전면허 취득이 불가능합니다.');
}
/*
18 <= age3 && age3 < 20  → 18 <= age3 < 20 사용 x
*/
console.log('');
let age4 = 21;
let license = false;
if (age4 > 20) {
    if (license == true) {
        console.log('운전이 가능합니다.');
    } else {
        console.log('면허부터 따세요...');
    }
} else {
    console.log('운전이 불가능합니다.');
}
console.log('');
/*
입력하는 숫자가 0인지, 음수인지, 양수인지 판단하는 프로그램
*/
let i = 5;
if (i == 0) {
    console.log('0입니다.');
} else if (i < 0) {
    console.log('음수입니다.');
} else {
    console.log('양수입니다.');
}
console.log('');
// 나는 대학교 교수이다. 레포트 점수에 따라서 등급을 결정짓는 프로그램을 만들고자 한다. 점수별 등급은 아래와 같다
/*
90~100        : A
80~89         : B
70~79         : C
60~69         : D
less than 59  : F
*/
let score = 65;
if (90 <= score && score <= 100) {
    console.log('A입니다.');
} else if (80 <= score && score <= 89) {
    console.log('B입니다.');
} else if (70 <= score && score <= 79) {
    console.log('C입니다');
} else if (60 <= score && score <= 69) {
    console.log('D입니다.');
} else if (0 <= score && score <= 59) {
    console.log('F입니다.');
} else {
    console.log('잘못된 범위입니다.');
}
