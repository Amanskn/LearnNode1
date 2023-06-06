const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
function twiceTheAge(age) {
  return 2*age;
}
Array.prototype.myFilter=function(cb,a,b,c){
    let newArr=[];
    for(i of this){
        
        if(cb(i))
            newArr.push(i);
    }
    return newArr;
}
Array.prototype.myMap=function(cb){
    let newArr=[];
    for(i of this){
        
        newArr.push(cb(i));
    }
    return newArr;
}

const myFilterResult=ages.myFilter(checkAdult);
const normalFilterResult=ages.filter(checkAdult);
const myMapResult=ages.myMap(twiceTheAge);
const normalMapResult=ages.map(twiceTheAge);
console.log("original array",ages)
console.log("myFilterResult",myFilterResult,"This is the arr.length got it",Array.prototype.myFilter.length);
console.log("normalFilterResult",normalFilterResult);
console.log("myMapResult",myMapResult);
console.log("normalMapResult",normalMapResult);