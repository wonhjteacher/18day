 //Date 객체 이용해서 
 // 년월일요일   - >  2022년 5월 26일 목요일 

 //getFullYear() getMonth() getDate() getDay() 

const today = new Date() ; 
const year = today.getFullYear();
const month = today.getMonth()+1;
const day =today.getDate();
const weekDay=['일','월','화','수','목','금','토']
const date = weekDay[today.getDay()];

console.log(`${year}년 ${month}월 ${day}일 ${date} 요일`)