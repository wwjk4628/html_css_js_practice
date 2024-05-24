console.log('21ㅂㅈㄷㄱ@@');
console.log('-21.5');
console.log('성민이 코딩');
let messi=100;
console.log(messi);
messi= "메시";
let aaa=5;
console.log(aaa);
aaa=8;
console.log(aaa);
const bb = 5
console.log(bb);
/*const promptMessage = "프롬포트에 표시할 문자열";
const result= prompt(promptMessage);
console.log(result);*/
let str = '따옴포 문자열';
console.log(str);
str = '백틱 문자열!!??';
console.log(str);
//9회차
let player = prompt('축구선수');
let num = prompt('등번호');
console.log(`제가 좋아하는 축구선수는 ${player}, 그의 등번호는 ${num}`)
//10회차
/*let data;
console.log(data);

data = "HELLO";
console.log(data);

data = null;
console.log(data);*/
let data = true;
console.log(data);

data = false;
console.log(data);

//data = True;
//console.log(data);

//11회차
/*console.log(document.querySelector("h1"))
console.log(document.querySelector("p"))
console.log(document.querySelector("#text"))
console.log(document.querySelector(".paragraph"))
console.log(document.getElementById('text'))*/
console.log(document.getElementById('p'))
const h1= document.querySelector('h1')
const p = document.getElementById('text')

console.log(h1.textContent)
h1.textContent="헬로우 여러분!!"
p.textContent="겟엘리먼트바이아이디"
console.log(p.textContent)


//const result = window.confirm("확인해봐요")
//console.log(result)

function thereisReturn(){
    console.log("반환한다")
    return 10;
}
const result = thereisReturn()
console.log(result)