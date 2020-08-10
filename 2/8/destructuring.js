//Array destructring 
[a, b] = ['Hello', 'Max'];
console.log(a); //Hello
console.log(b); //Max

//Object destructring
const myObj = {
    name: 'Max',
    age: 28
}
const {
    name
} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}