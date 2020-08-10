const number = 1;
const num = number;
console.log(num);//num is a copy of number 

//This is called primitive types
//------------------------------------------
//Objects and arrays are refrence types 
const person = {
    name:'Max'
};
const secondPerson = person;
person.name = "Manu";
console.log(secondPerson);//Output: Object "Manu"
//------------------------------------------
const person = {
    name:'Max'
};
const secondPerson = {
    ...person
};
person.name = "Manu";
console.log(secondPerson);//Output:Object "Max" because it is copy not refrence
