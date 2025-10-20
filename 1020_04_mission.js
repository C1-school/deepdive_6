// 미션 1 : 직사각형의 넓이를 구하는 함수
function getRectArea(width, height) {
    const result = width * height;
    return `사각형의 넓이는 ${result}입니다.`;
}
console.log(getRectArea(5,13));



// 미션 2 : 학생의 성적표를 받아서, 평균을 구하는 함수
function getAverage(korean, english, math) {
    const result = (korean + english + math) / 3;
    return `당신의 평균점수는 ${result.toFixed(2)}입니다.`;
}
console.log(getAverage(80, 75, 90));



// 미션 3 :  반지름을 입력받아 원의 넓이를 구하는 함수
function getCircleArea(radius) {
    const result = Math.PI * (radius**2);
    return `반지름이 ${radius}인 원의 넓이는 ${result.toFixed(2)}입니다.`;
}
console.log(getCircleArea(5));



// 미션 4 : 원래 가격과 할인율을 입력하면, 최종 판매 가격을 구하는 함수
function calcDiscount (price, discount) {
    const result = price * (1 - discount/100)
    return `원래 가격 ${price.toLocaleString()}원에서 ${discount}% 할인되어, 최종 가격은 ${result.toLocaleString()}원입니다.`;
}
console.log(calcDiscount(50000, 10));



// 미션 5 : 두 수를 입력받아, 나눈 나머지값을 구하는 함수
function getRemainder(dividend, divisor) {
    const result = dividend % divisor;
    return `${dividend}를 ${divisor}로 나눈 나머지는 ${result}입니다.`;
}
console.log(getRemainder(13,5));



// 미션 6 : 직사각형의 둘레를 구하는 함수
function getRectPerimeter(width, height) {
    const result = 2 * (width+height);
    return `가로 ${width}cm, 세로 ${height}cm인 사각형의 둘레는 ${result}cm입니다.`;
}
console.log(getRectPerimeter(5,13));



// 미션 7 : 시험점수를 입력받아 60점 이상은 합격, 아니면 불합격 여부를 판단하는 함수
function checkPass(score) {
    const result = score >= 60 ? '합격' : '불합격'
    return `${score}점은 ${result}입니다.`;
}
console.log(checkPass(83));
console.log(checkPass(57));



// 미션 8 : 이벤트 참여가능 여부를 판단하는 함수
// 나이가 20세 이상이며, 서울에 거주하는 사람대상 판별
// 응용 : 나이가 eventAge세 이상이며, eventCity에 거주하는 사람대상 판별
function canJoinEvent(age, city) { 
    const eventAge = 20; 
    const eventCity = '서울'
    const result = (age>=eventAge && city===eventCity) ? '가능' : '불가능';
    return `${age}세, ${city} 거주자인 당신은 이벤트 참여가 ${result}합니다.`
}
console.log(canJoinEvent(17, '서울'));
console.log(canJoinEvent(21, '부산'));
console.log(canJoinEvent(28, '서울'));



// 미션 9 : 영화 관람 여부를 판단하는 함수
// 15세 이상이어야 하며, 부모동반이어야 관람 가능
/* 
응용 : 15세 이상 20세 미만은 부모동반이어야 관람 가능
20세 이상은 부모동반 없이 관람 가능
*/
function canWatchMovie(age, parent) {
    let result;

    if (age > 15) {
        if (age >= 20) {
            result = '관람 가능';
        }
        else {
            if (parent) { result = '관람 가능'; }
            else { result = '관람 불가능'; };
        };
    }
    else {
        result = '관람 불가능';
    };

    return `나이 ${age}세, 보호자동반(${Boolean(parent)})는 ${result}입니다.`;
}
console.log(canWatchMovie(21, true));
console.log(canWatchMovie(21, false));
console.log(canWatchMovie(16, true));
console.log(canWatchMovie(16, false));
console.log(canWatchMovie(13, true));
console.log(canWatchMovie(13, false));



// 미션 10 : 요일을 입력받아, 주말여부를 판별하는 함수
function isWeekend(day) { 
    const result = (day==='토' || day==='일') ? '주말' : '평일';
    return `입력하신 ${day}요일은 ${result}입니다.`
}
console.log(isWeekend('일'));
console.log(isWeekend('월'));
console.log(isWeekend('화'));
console.log(isWeekend('수'));
console.log(isWeekend('목'));
console.log(isWeekend('금'));
console.log(isWeekend('토'));



