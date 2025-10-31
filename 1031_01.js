function sum (num1, num2) {
    const result = num1 + num2;
    return result;
}

const divider = function div(num1, num2) {
    const result = Math.floor(num1/num2);
    return result;
}

const remainer = (num1, num2) => {
    const result = num1 % num2;
    return result;
}

const a = 15;
const b = 8;

console.log(`${a}와 ${b}의 합 ${sum(a, b)}`)
console.log(`${a}를 ${b}로 나누면 몫은 ${divider(a, b)}`)
console.log(`${a}를 ${b}로 나누면 나머지는 ${remainer(a, b)}`)