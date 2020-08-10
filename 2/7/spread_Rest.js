//Spread => Used to split up array elements or object properties

const oldArray = [1,2,3];
const newArray = [...oldArray, 4, 5];
console.log(newArray);
const oldObject = {
    name:'Mary',
    age:25
};
const newObj   = {...oldObject, newProp:5}
console.log(newObj);
//Rest => Used to merge a list of function arguments into an array

function sortArgs(...args){
    return args.sort();
}
const args = [3,2,9];
console.log(sortArgs(...args));