import React, { Component } from 'react';
//import logo from './logo.svg';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
     username:'superMax'
  }

  usernameChangedHandler = (event) => {//we use this syntax =() => {} and not (){} because if we want to use event handler (this) should refer to Class
     this.setState({username:event.target.value});
  }
  render() {

    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
         <UserInput 
         changed={this.usernameChangedHandler}
         currentName={this.state.username}/>
         <UserOutput userName={this.state.username}/>
         <UserOutput userName={this.state.username}/>
         <UserOutput userName="Max"/>
      </div>//this html code is jsx 
    );
    //Using the syntax bind is better than the syntax in line 31 but they are the same!
    //we can write <Person></Person> or <Person/> when we don't have anycode between <Person> and </Person>
    //return React.createElement('div',{className:'App'},null,React.createElement('h1',null,'Does this works now?!'));
  }
}

export default App;