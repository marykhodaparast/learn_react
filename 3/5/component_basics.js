// Here App is our component 

// 6) Understanding JSX
// first we comment JSX code in App.js
// now we have the following in the App class

/*************************************/
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app </h1>
      </div>//this html code is jsx 
    );
  }
}
/*************************************/
/*and return sth else for example we return 
return React.createElement('div',null,'h1','Hi,I\'m a react app');
now change the return code to below to create a h1 inside of the div
return React.createElement('div',null,React.createElement('h1',null,'Does this works now?!'));
now change to this 
return React.createElement('div',{className:'App'},null,React.createElement('h1',null,'Does this works now?!'));
to have a class for our div 
---------------------------------------
now we have this in our App.js file in the class*/
/**************************************/
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app </h1>
      </div>//this html code is jsx 
    );
    //return React.createElement('div',{className:'App'},null,React.createElement('h1',null,'Hi, I'\m a react app'));
  }
}
/**************************************/
/*7) JSX restrictions
1) in the App.js class can't be used for css classes because class is a reserved word in js so we use className 
2) other restriction is that we can't return the below part in our code*/
/***************************************/
return (
      <div className="App">
        <h1>Hi, I'm a react app </h1>
      </div>//this html code is jsx 
      //<h1>dddd</h1>//it doesn't work 
    );
/***************************************/
/*but we can write the below code*/ 
/****************************************/
return (
      <div className="App">
        <h1>Hi, I'm a react app </h1>
        <p>This is really working!</p>
      </div>//this html code is jsx 
    ); //and now it works 
/***************************************/
/*8) creating a functional component
---------------------------------------
if we want to have another component for example person in src part of project create a folder called Person(with capital p at the first)
and inside that folder create a Person.js file and write the below code in Person.js*/
/****************************************/
import React from 'react';
const person = () => {
   return <p>I'm a Person!</p>
};
export default person;
/****************************************
now you can use it in the App.js file so write the below code in App.js 
****************************************/
//@@@@ = it is added to our before code
import React, { Component } from 'react';
//import logo from './logo.svg';
import Person from './Person/Person';//@@@@
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app </h1>
        <p>This is really working!</p>
        <Person></Person> //@@@@
      </div>//this html code is jsx 
    );
    //we can write <Person></Person> or <Person/> when we don't have anycode between <Person> and </Person>//@@@@
    //return React.createElement('div',{className:'App'},null,React.createElement('h1',null,'Does this works now?!'));
  }
}

export default App;
/****************************************/
/* 11) Outputting dynamic content */
/* in Person.js write the below code */
/****************************************/
import React from 'react';
const person = () => {
   return <p > I 'm a Person and I am {Math.floor(Math.random() * 30 )} years old!</p>//@@@@
};
export default person;
/****************************************/
/* 12) Working with props */
/* in the App.js you can write the below code */
/****************************************/
import React, { Component } from 'react';
//import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app </h1>
        <p>This is really working!</p>
        <Person name="Max" age="28"/> //@@@@
        <Person name="Manu" age="29">My Hobbies: racing</Person>//@@@@
        <Person name="Maryam" age="25"/>//@@@@
      </div>//this html code is jsx 
    );
    //we can write <Person></Person> or <Person/> when we don't have anycode between <Person> and </Person>
    //return React.createElement('div',{className:'App'},null,React.createElement('h1',null,'Does this works now?!'));
  }
}

export default App;

/****************************************/
/* and now in the Person.js you should write the below code */
/****************************************/
import React from 'react';
const person = (props) => {
   return <p > I 'm {props.name}  and I am {props.age} years old!</p>//@@@@
};
export default person;
/****************************************/
/* 13) in this lecture we talk about (My Hobbies:racing) <Person name="Manu" age="29">(My Hobbies: racing)</Person> */
/* in the Person.js write the below code */
/****************************************/
import React from 'react';
const person = (props) => {
      return 
      ( //@@@@
      <div>//@@@@
         <p> I 'm {props.name} and I am {props.age} years old!</p> 
         <p>{props.children}</p>//@@@@
      </div>)//@@@@
      };//@@@@
export default person;
/****************************************/
/* 14) Understanding & using state */
/* the code below is how we define state in App.js */
/****************************************/
class App extends Component {
  state = {
    persons:[
      {name:'Max',age:28},
      {name:'Manu',age:29},
      {name:'Maryam',age:25}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app </h1>
        <p>This is really working!</p>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>//this html code is jsx 
    );
    //we can write <Person></Person> or <Person/> when we don't have anycode between <Person> and </Person>
    //return React.createElement('div',{className:'App'},null,React.createElement('h1',null,'Does this works now?!'));
  }
}
/****************************************/
/* 16) Handling events with methods */
/* in the App.js file  */
/****************************************/
class App extends Component {
  state = {
    persons:[
      {name:'Max',age:28},
      {name:'Manu',age:29},
      {name:'Maryam',age:25}
    ]
  }
  switchNameHandler = () => {//@@@@
      console.log('was Clicked!');//@@@@
  }//@@@@
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app </h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>//@@@@
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>//this html code is jsx 
    );
    //we can write <Person></Person> or <Person/> when we don't have anycode between <Person> and </Person>
    //return React.createElement('div',{className:'App'},null,React.createElement('h1',null,'Does this works now?!'));
  }
}
/****************************************/
/* 18) Manipulating the state  */
/* 21) stateful vs stateless components */
/* a stateful component is a component that has state in it no difference it is a class or functional base 
but stateless component is a component like Person.js that doesn't have any state */
/* stateful component(dumb or presentational component) is also called smart component or container components because they contain states */
////////////
/* So use state in few components and have stateless component more to have a better code! */










