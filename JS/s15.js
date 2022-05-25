let menu = 2;
if (menu == 1) {
    console.log('물건 사기');
} else if (menu == 2) {
    console.log('잔고 확인');
} else if (menu == 3) {
    console.log('히스토리 확인');
} else {
    console.log('홈으로 돌아가기');
}
console.log('');
switch (menu) {
    case 1:
        console.log('물건 사기');
        break;
    case 2:
        console.log('잔고 확인');
        break;
    case 3:
        console.log('히스토리 확인');
        break;
    default:
        console.log('홈으로 돌아가기'); //else와 비슷함
}
// 지정된 값이 1개로 떨어질때 사용가능
