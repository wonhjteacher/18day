const subway = ['1호선','2호선','3호선','4호선','5호선'];
console.log(subway[0])
console.log(subway[1])
console.log(subway[2])
console.log(subway[3])
console.log(subway.length)

//delete subway[2]; // 배열의 인덱스는 수정 하지 않는다. 
subway.splice(2,1) //(시작인덱스,갯수)  배열의 인덱스가 업데이트 된다. 

console.log(subway)
console.log(subway.length)

//for 
for(let i = 0 ; i<subway.length ; i++) {
    console.log(subway[i])
}
