// 배열
const animals = ['lion', 'tiger', 'puppy', 'parret', 'cat']

for (let animal of animals) {
    console.log(animal);
}

for (let i=0; i<animals.length; i++) {
    console.log(animals[i]);
}



console.clear();



/*
forEach 메서드
첫 번째 매개변수 : 처리할 현재 배열 원소 (필수)
두 번째 매개변수 : 처리할 현재 배열 원소의 인덱스 넘버 (선택)
세 번째 매개변수 : forEach() 메서드를 호출한 배열 객체 (선택)
*/

animals.forEach((animal, idx) => {
    if (idx === 3) {
    console.log(`${idx}.${animal}`);
    }
});



console.clear();



// 연습 문제
const numbers = [10, 20, 30, 40, 50];

// 1. forEach 메서드로 40 이상의 숫자만 출력 -> 40, 50
numbers.forEach((number) => {
    if (number >= 40) console.log(number);
});

// 2. forEach 메서드로 40 이상의 인덱스번호만 출력 -> 3, 4
numbers.forEach((number, idx) => {
    if (number >= 40) console.log(idx);
});



console.clear();



const words = ['hamburger','milk','coffee', 'juice','chocolate cookie'];

// 3. words에서 글자수가 6자 이상인 단어만 출력
// -> hamburger, coffee, chocolate cookie
words.forEach((word) => {
    if (word.length >= 6) console.log(word);
});