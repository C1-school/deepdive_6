// 퀴즈 1) 두 수의 차이 구하기

function getDiff(num1, num2) {
    const result = Math.abs(num1-num2);
    return result;
}

const a = 5;
const b = 10;
console.log(`${a}와 ${b}의 차이는 ${getDiff(a, b)}입니다.`)


// 퀴즈 2) 만 나이 구하기

function getAge(year) {
    const result = new Date().getFullYear() - year;
    return result;
}

const c = 2001;
console.log(`${c}년에 태어난 경우, 만 나이는 ${getAge(c)}세입니다.`)


// 퀴즈 3) 몫 구하기

function getQuotient(num1, num2) {
    const result = Math.floor(num1/num2);
    return result;
}

const d = 15;
const e = 7;
console.log(`${d} 나누기 ${e}의 몫은 ${getQuotient(d,e)}입니다.`)


// 퀴즈 4) 배열의 평균값 구하기

const numbers = [3, 5, 10, 2, 6, 7, 9];
function getAverage(array) {
    const result = array.reduce((acc, cur) => acc+cur, 0) / array.length;
    return result;
}

console.log(`${numbers}의 평균은 ${getAverage(numbers)}입니다.`)