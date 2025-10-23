function isAdult (age) {
    let result = '';
    if (age >= 20) result = '성인';
    else result = '미성년자';
    return `당신의 나이는 ${age}살이고, ${result}입니다.`;
}

console.log(isAdult(34));
console.log(isAdult(12));