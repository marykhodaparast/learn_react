import React, { useState } from 'react';
//import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

const app = props =>{
    const [ personState, setPersonsState] = useState({persons:[//array destructuring in ES6
      {name:'Max',age:28},
      {name:'Manu',age:29},
      {name:'Maryam',age:25}
    ],
    //otherState:'some other value'
  });
  const [otherState, setOtherState] = useState('some other vaue');
  console.log(personState);
  console.log(otherState);
  const switchNameHandler = () => {
     //console.log('was Clicked!');
      //Don't do this this.state.persons[0].name='Maximilian';
      setPersonsState({
        persons:[
          {name:'Maximilian',age:28},
          {name:'Manu',age:29},
          {name:'Maryam',age:22}
        ],
        otherState:personState.otherState
      })
  }
    return (
      <div className="App">
        <h1>Hi, I'm a react app </h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/> 
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: racing</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>//this html code is jsx 
    );
    //we can write <Person></Person> or <Person/> when we don't have anycode between <Person> and </Person>
    //return React.createElement('div',{className:'App'},null,React.createElement('h1',null,'Does this works now?!'));

}
export default app;


