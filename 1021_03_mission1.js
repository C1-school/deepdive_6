// 논리연산자

// 예제 1
// 회원이거나 월요일이면 10% 할인을 받을 수 있음
let isMember = true;
let isMonday = false;
let canGetDiscount = isMember || isMonday;
console.log(`01. 할인 여부 : ${canGetDiscount}`);

// 예제 2
// 키 140cm 이상이고, 10세 이상이어야 놀이기구에 탑승 가능
let height = 135;
let age = 8;
let canRide = (height>=140) && (age>=10);
console.log(`02. 탑승 여부 : ${canRide}`);

// 예제 3
// 3만원 이상 주문하거나, 거리가 2km 이내면 배달비 무료
let orderAmount = 25000;
let distance = 3;
let isFreeDelivery = (orderAmount>=30000) || (distance<=2);
console.log(`03. 배달 무료 : ${isFreeDelivery}`); 

// 예제 4
// 날씨가 맑고, 운동화가 있고, 피곤하지 않으면 공원에서 운동
let isSunny = true;
let hasRunningShoes = true;
let isTired = false;
let willExercise = isSunny && hasRunningShoes && !isTired;
console.log(`04. 운동 여부 : ${willExercise}`);

// 예제 5
// 시간이 있거나, 친구가 있거나, 티켓이 있으면 영화 관람
let hasTime = true;
let hasFriend = false;
let hasTicket = true;
let willWatchMovie = hasTime || hasFriend || hasTicket;
console.log(`05. 영화 관람 : ${willWatchMovie}`);

// 예제 6
// 수영을 할 수 있고, 수영복이 있거나 보호자가 있으면 입장 가능
let canSwim = true;
let hasSwimsuit = false;
let hasGuardian = false;
let canEnterPool = canSwim && (hasSwimsuit || hasGuardian);
console.log(`06. 입장 여부 : ${canEnterPool}`);

// 예제 7
// VIP 패스가 있거나, 대기시간이 30분 이하이고 평일이면 놀이기구 즉시 탑승 가능
let hasVIPPass = false;
let waitTime = 25;
let isWeekday = true;
let canRideImmediately = hasVIPPass || (waitTime<=30 && isWeekday);
console.log(`07. 즉시 탑승 : ${canRideImmediately}`);

// 예제 8
// 단골 손님이고, 4인 이하이거나 예약이 있으면 음식점 즉시 입장 가능
let isRegularCustomer = true;
let partySize = 6;
let hasReservation = false;
let canEnterRestaurant = isRegularCustomer && (partySize<=4 || hasReservation);
console.log(`08. 즉시 입장 : ${canEnterRestaurant}`);


// 예제 9
// 관리자이면 서버 접속 가능
// 점검 중이 아니고, 레벨 20 이상이거나 프리미엄 회원이면 서버 접속 가능
let accountLevel = 35;
let hasPremium = false;
let isMaintenanceTime = false;
let isAdmin = false;
let canAccessServer =
    isAdmin
    || (!isMaintenanceTime && (accountLevel>=20 || hasPremium));
console.log(`09. 서버 입장 : ${canAccessServer}`);

// 예제 10
// 항공권 할인 조건:
// 1. (65세 이상 노인이거나 12세 이하 어린이) 그리고 이코노미석이면 할인
// 2. 또는, 마일리지 카드가 있고 30일 전 예약이면 할인
// 3. 또는, 주말이 아니고 60일 전 예약이면 할인
let passengerAge = 25;
let isWeekendFlight = true;
let hasFrequentFlyerCard = false;
let advanceBookingDays = 45;
let isEconomyClass = true;

let canGetFlightDiscount =
    ((passengerAge>=65 || passengerAge<=12) && isEconomyClass)
    || (hasFrequentFlyerCard && advanceBookingDays>=30)
    || (!isWeekendFlight && advanceBookingDays>=60);
console.log(`10. 할인 여부 : ${canGetFlightDiscount}`)