const users = ["irangi", "camel", "ghost", "suuny", "henry"]
let userIndex = 2;

// 서수로 3번째 있는 user 이름 찍기
// forEach 배열 메서드

users.forEach((user, idx) => {
    if (idx === 2) {
        console.log(`${idx+1}번째 user는 ${user}님 입니다.`);
    }
})

users.forEach((user, idx) => {
    if (idx === userIndex-1) {
        console.log(`${userIndex}번째 user는 ${user}님 입니다.`);
    }
})

