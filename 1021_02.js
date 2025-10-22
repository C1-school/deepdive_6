const animals = ['lion', 'cat', 'puppy', 'cow', 'monkey']
console.log(animals[2]) // puppy

for (const animal of animals) {
    console.log(animal);
}

/*
for (초기화 ; 조건식 ; 증감식) {
    실행문
}
*/

for (let i=0 ; i<5 ; i++) {
    console.log(`${i+1}. ${animals[i]}`)
}