function getNumber(num, x) {
    return num%x===0 ? '공배수' : '공배수 아님';
}

console.log(getNumber(60,3))
console.log(getNumber(60,7))