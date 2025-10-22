const numbers = [ 3, 17, 21, 30, 9 ];
let result1 = 0;
let result2 = 0;

for (number of numbers) {
    result1 += number;
}

for (let i=0; i<numbers.length; i++){
    result2 += numbers[i];
}

console.log(`for of문 : ${numbers}의 총합은 ${result1}입니다.`)
console.log(`for문 : ${numbers}의 총합은 ${result2}입니다.`)

const str = "Hello World";
console.log(str.length)