const a = 10;
const b = "10";
const c = true;
const d = 3;

// typeof : 변수의 타입을 출력
console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean

// 산술연산자
console.log(a + d);
console.log(a * d);
console.log(a / d);
console.log(a - d);
console.log(a % d);

// 비교연산자

// 동등연산자
console.log(a == b); // 값만 비교, 데이터 타입은 비교하지 않음
console.log(a != b); // 같지 않다
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);

// 일치연산자
console.log(a === b); // 값과 데이터 타입을 모두 비교
console.log(a !== b);

// 논리연산자