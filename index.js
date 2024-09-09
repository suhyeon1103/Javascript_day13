
// 1. 변수 선언과 할당
var name = "김수현";
let age = 29;
const nationality = "Korea";

console.log(name)
console.log(age)
console.log(nationality)

// 2. 변수 선언과 할당 2
const person = {
    name : "Suhyeon kim",
    age : 29,
};

// 3. 변수 선언과 할당 3
console.log(person.name)
console.log(person.age)

// 4. 데이터 타입 확인
console.log(typeof name)
console.log(typeof age)
console.log(typeof nationality)

// 5. 산술 연산
let num1 = 15;
let num2 = 4;

console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1%num2)

// 6. 문자열 연결
let firstName = "Suhyeon"
let lastName = "Kim"

console.log(firstName + lastName);

// 7. 조건문
const person2 = {
    age: 25,
};

const person3 = {
    age: 15,
};

person2.age >= 18 ? console.log("성인입니다.") : console.log("성인이 아닙니다.")
person3.age >= 18 ? console.log("성인입니다.") : console.log("성인이 아닙니다.")

// 8. 삼향 연산자

// 9. 배열 선언과 사용
const colors = ["노란색", "하늘색", "하얀색"];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// 10. 배열 반복과 합계 계산
const numbers = [30, 5, 6, 15, 10, 226, 459, 582];
console.log(
    numbers[0] +
    numbers[1] +
    numbers[2] +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    numbers[6] +
    numbers[7]
);

// 10. 논리 연산자
const isAdmin = false;
const isLoggedIn = true;

// AND 연산자
console.log(isAdmin && isLoggedIn);

// OR 연산자
console.log(isAdmin || isLoggedIn);

// NOT 연산자
console.log(!isAdmin && isLoggedIn);
console.log(isAdmin || !isLoggedIn);


