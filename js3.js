const color=['red','green','blue']
console.log(color.unshift('yellow')) // 제일 앞 추가 4
console.log(color) 
console.log(color.push('orange')) // 제일 앞 추가 5
console.log(color) //[ 'yellow', 'red', 'green', 'blue', 'orange' ]
console.log(color.splice(2,0,'sky','black')) 
//  splice(시작인덱스,삭제할 갯수,추가될 값)) 
console.log(color)




