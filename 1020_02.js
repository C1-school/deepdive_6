const a = 13;
const b = 5;

const sum = a + b;

const isEven = a % 2

console.log(sum)
console.log(isEven)

function calcSum(x, y) {
    const result = x + y;
    console.log(result)
    return result;
}

calcSum(3, 5);
calcSum(a, b);
calcSum(10, 15);



createIcecream('choco', 'amond');
createIcecream('vanila', 'pinnut');

function createIcecream(flavor, topping) {
    result = `${flavor} ${topping} Icecream이 만들어졌습니다.`
    console.log(result);
}