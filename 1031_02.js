const numbers = [149, 180, 192, 170]
const height = 167;


let count1 = 0;
for (number of numbers) {
    if (number > height) count1++;
}

const count2 = numbers.reduce((acc, cur) => (cur > height ? ++acc : acc), 0);
console.log(`Ghost보다 키가 큰 사람은 총 ${count1}명입니다.`)