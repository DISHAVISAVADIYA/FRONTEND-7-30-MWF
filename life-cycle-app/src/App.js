import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component
{
  // constructor is use to define class (a other name of class)
  constructor(props) {
    super(props)
    this.state = {
      color: 'yellow',
      movie: 'pink',
      name: 'disha',
      email : 'aaa@gmail.com'
    }
    
  }
  render() {
    return (
      <>
        <h1>fav color is : {this.state.color}</h1>
        <h1>fav movie is : {this.state.movie}</h1>
        <input type="text" placeholder='name' value={this.state.name} />
        <br/>
        <input type="email" placeholder='email' value={this.state.email} />
        
        </>
    )
  }
}

export default App;
