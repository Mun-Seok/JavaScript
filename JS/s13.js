let patient = {
    name: 'munseok',
    age: 26,
    gender: 'male',
    disease: 'cold',
};
/* 위의 코드는 patient라는 객체를 생성하고, 거기에다가 name, age, gender, disease라는 정보를 입력한 경우이다. */
console.log(patient);
console.log('');
console.log(patient.name);
console.log('');
console.log(patient['name']);
/* 배열과 살짝 혼동되기도 하지만, 배열의 방식으로도 이 객체의 키 값을 불러올 수 있다. */
patient.age = 'MunSeok';
console.log(patient);
patient['age'] = 30;
console.log(patient);
delete patient.gender;
console.log(patient);
patient.address = '울산시 남구';
console.log(patient);
console.log('');
let patientList = [
    { name: 'munseok', age: 20, gender: 'female', disease: 'cold' },
    { name: 'munsik', age: 30, gender: 'male', disease: 'cold' },
    { name: 'munsok', age: 40, gender: 'male', disease: 'cold' },
];
console.log(patientList);
console.log(patientList[0]);
console.log(patientList[0].name);
