// for-of 문 예제 문제

// 01. 배열의 모든 요소를 출력
console.log(`[for-of 예제 1]`);
const arr1 = [10, 20, 30, 40, 50];

for (const num of arr1) {
    console.log(num)
}


// 02. 문자열 배열의 모든 요소 앞에 "Hello, "를 붙여서 출력
console.log(`\n[for-of 예제 2]`);
const arr2 = ["Alice", "Bob", "Charlie"];

for (const person of arr2) {
    console.log(`Hello, ${person}!`)
}


// 03. 숫자 배열의 모든 요소의 합 구하기
console.log(`\n[for-of 예제 3]`);
const arr3 = [5, 10, 15, 20];

let sum = 0;
for (const num of arr3) {
    sum += num
}
console.log(`${arr3}의 총 합은 ${sum}입니다.`)


// 04. 배열에서 짝수만 필터링하여 새 배열에 담기
console.log(`\n[for-of 예제 4]`);
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrEven = [];
for (const num of arr4) {
    if (num % 2 === 0) arrEven.push(num);
}
console.log(`${arr4}에서 짝수는 ${arrEven}입니다.`)


// 05. 객체 배열에서 특정 조건(age >= 20)을 만족하는 사람의 이름만 출력
console.log(`\n[for-of 예제 5]`);
const arr5 = [
  { name: "Kim", age: 18 },
  { name: "Lee", age: 25 },
  { name: "Park", age: 22 },
  { name: "Choi", age: 17 }
];

for (const person of arr5) {
    if (person.age >= 20) console.log(`${person.name}은 성인입니다.`)
}



// for 문 예제 문제

// 01. 1부터 10까지의 숫자를 출력
console.log(`\n[for 예제 1]`);
for (let i=1; i<=10; i++) console.log(i);


// 02. 배열의 인덱스와 값을 함께 출력
console.log(`\n[for 예제 2]`);
const arr6 = ["apple", "banana", "cherry"];
for (let i=0; i<arr6.length; i++) console.log(`${i+1}. ${arr6[i]}`);

// 03. 구구단 3단을 출력하세요. (3 x 1 = 3 형식)
console.log(`\n[for 예제 3]`);
for (let i=1; i<=9; i++) console.log(`3 x ${i} = ${3*i}`);


// 04. 배열을 역순으로 출력하세요.
console.log(`\n[for 예제 4]`);
const arr7 = [100, 200, 300, 400, 500];
for (let i=arr7.length-1; i>=0; i--) console.log(arr7[i]); 

// 05. 2차원 배열의 모든 요소를 출력하세요.
console.log(`\n[for 예제 5]`);
const arr8 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i=0; i<arr8.length; i++) {
    for (let j=0; j<arr8[i].length; j++) {
        console.log(arr8[i][j]);
    }
}