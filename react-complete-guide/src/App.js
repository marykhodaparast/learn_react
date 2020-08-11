import React, { Component } from 'react';
//import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons:[
      {name:'Max',age:28},
      {name:'Manu',age:29},
      {name:'Maryam',age:25}
    ]
  }
  switchNameHandler = (newName) => {
      //console.log('was Clicked!');
      //Don't do this this.state.persons[0].name='Maximilian';
      this.setState({
        persons:[
          {name:newName,age:28},
          {name:'Manu',age:29},
          {name:'Maryam',age:22}
        ]
      })

  }
  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name:'Max',age:28},
        {name:event.target.value,age:29},
        {name:'Maryam',age:25}
      ]
    })
  }
  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react app </h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Maximilian!!')}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this,'Max!')}
        changed={this.nameChangedHandler}
        >My Hobbies: racing</Person> 
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>//this html code is jsx 
    );
    //Using the syntax bind is better than the syntax in line 31 but they are the same!
    //we can write <Person></Person> or <Person/> when we don't have anycode between <Person> and </Person>
    //return React.createElement('div',{className:'App'},null,React.createElement('h1',null,'Does this works now?!'));
  }
}

export default App;