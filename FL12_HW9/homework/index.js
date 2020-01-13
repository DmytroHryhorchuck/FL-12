// task 1
function convert (){
    let arr = [];
for (let i = 0; i<arguments.length; i++){
    if(typeof arguments[i]==='string'){
let item = Number(arguments[i]);
arr.push(item);
}else if (typeof arguments[i]==='number'){
        let item = String(arguments[i]);
        arr.push(item)
    }
}
return arr
}
convert('1', 2, 3, '4')

// task2
 function executeforEach (array, func){
 for (let el of array){
 func(el); 
}
}
executeforEach([1,2,3],function(el){
    console.log(el * 2)
})
// task3
function mapArray (arr, func){
  let newArr = [];
  executeforEach(arr, function(el){
    newArr.push(func(+el))
  });
  return newArr;
}
mapArray([2, '5', 8], function(el){
    return el + 3
}) 
// task 4
function filterArray (arr, func){
  let newArr = [];
  executeforEach(arr, function(el){
    if(func(el)){
      newArr.push(el)
    }
  })
  return newArr;
}
filterArray([2, 5, 8], function(el){ 
return el % 2 === 0
}) 
// task 5
function flipOver (str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
  }
  return newStr
}
flipOver('hey world') 
// task 6
function makeListFromRange(arr){
let newArr = []
  for(let i = arr[0]; i<=arr[arr.length-1]; i++){
    newArr.push(i);
  }
  return newArr
}
makeListFromRange([2, 7])
// task 7
function getArrayOfKeys (arr, nameProp){
  let namesArray = [];
  executeforEach(arr, function(el){
    namesArray.push(el[nameProp]);
  });
  return namesArray
  }
  const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];
  getArrayOfKeys(actors, 'name');
// task8
function substitute(arr){
  return mapArray(arr, function(el){
    if(el < 30) {
      return '*'
    }else{
  return el
}
  })
}
substitute([58, 14, 48, 2, 31, 29]);
// task9
function getPastDay(date, daysPassed) {
  const miliSecInOneDay = 86400000;
  return new Date(date - miliSecInOneDay * daysPassed).getDate()
}
const date = new Date(2019, 0, 2);
getPastDay(date, 1)
getPastDay(date, 2)
getPastDay(date, 365)
// task 10
function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  let minutes = date.getMinutes()< 10 ? `0${date.getMinutes()}` : date.getMinutes();
return `${year}/${month}/${day} ${hours}:${minutes}`;
}
formatDate(new Date('6/15/2018 09:15:00')) 
formatDate(new Date()) 
