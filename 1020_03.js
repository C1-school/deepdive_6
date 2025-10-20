// const a = 5;
// const resultA = a%2 === 0 ? "짝수" : "홀수";
// console.log(resultA)


// const isEven = (a % 2) ? false : true;
// // const isEven = a % 2 === 0 ? true : false;
// // const isEven = Boolean(!(a % 2))
// console.log(isEven)


// const b = 23;
// const resultB = (b >= 10) ? "b는 10보다 크다" : "b는 10보다 크지 않다"
// console.log(resultB)


// // 숫자가 10보다 큰지 판별하는 함수
// function overTen (num) {
//     return num > 10 ? `${num}은 10보다 크다` : `${num}은 10보다 크지 않다`
// }
// console.log(overTen(11));


// 미션 1 : 직사각형의 크기를 구하는 함수
function getRectArea(width, height) {
    const result = width * height;
    return `사각형의 크기는 ${result}입니다.`
}
console.log(getRectArea(5,13));


// 미션 2 : 입력받은 유저의 나이가 성인인지 아닌지 판별하시오
function isAdult(age, name='사용자') {
    const result = age > 19 ? '성인' : '미성년자'
    return `${name}님은 ${result}입니다.`;
}
console.log(isAdult('Siwon', 24));
console.log(isAdult(12));


// 미션 3 : 학생의 성적표를 받아서, 평균을 구하시오
function getAverage(korean, english, math) {
    const result = (korean + english + math) / 3;
    return `당신의 평균점수는 ${result}입니다.` ;
}
console.log(getAverage(80, 75, 90));


// 미션 4 : 아이디와 패스워드 검증
function checkLogin(id, pw) { 
    const Myid = 'ghost';
    const Mypw = 1234;

    if (id === Myid && pw === Mypw) {
        return `${id}님, 로그인 성공`;
    }
    else {
        return `${id}님, 로그인 실패`;
    }
}
console.log(checkLogin('ghost', 1234));



