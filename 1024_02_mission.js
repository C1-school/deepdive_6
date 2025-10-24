const numbers = [32, 20, 5, 12, 0, 45];
const str = 'Hello, World';

// 문제 1. 홀수만 출력하기
console.log(`[문제 1-1]`);
for (let i=0;i<numbers.length;i++) {
    if (numbers[i] % 2 == 1) console.log(numbers[i]);
}

console.log(`\n[문제 1-2]`);
for (let i=0;i<numbers.length;i++) {
    // 0->falsy, 1->truthy 이용
    if (numbers[i] % 2) console.log(numbers[i]);
}


// 문제 2. 길이 출력하기
console.log(`\n[문제 2]`);
console.log(`문자열 '${str}'의 길이는 ${str.length}입니다.`);


// 문제 3. 총합 구하기
console.log(`\n[문제 3]`);
let sum = 0;

for (let i=0;i<numbers.length;i++) {
    sum += numbers[i];
}

console.log(`${numbers}의 총합은 ${sum}입니다.`);


// 문제 4. 20 이상의 수의 개수를 출력
console.log(`\n[문제 4]`);
let count = 0;
let num = 20;

for (let i=0;i<numbers.length;i++) {
    if (numbers[i] >= num) count += 1;
}

console.log(`${numbers} 중 ${num}보다 큰 수는 ${count}개입니다.`);