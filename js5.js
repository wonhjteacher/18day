
const year = ['2022','2023','2024','2024']
const year1= {} 
console.log(year.indexOf('2026')); // 인덱스 번호 리턴
console.log(year.includes('2024'));  // 배열안에 있는지 체크 true false
console.log(Array.isArray(year1));//  

 // year.indexOf('2026')
const value=year.indexOf('2024');
if(value!==-1){
  console.log('값이 있다');
}else{
  console.log('값이 없다')
}