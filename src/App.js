// import logo from './logo.svg';
import './App.css';
import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component{
  constructor(){
    super();
    console.log("Constructor strating")
  }
  state = {
    count: 0
  };
  add = () => {
    // this.setState({count: this.state.count+1});
    this.setState(current =>({count: current.count+1}));
  };
  minus = () => {
    this.setState({count: this.state.count-1});
    console.log("minus");
  };
  componentDidMount(){
    console.log("component rendered")
  }
  componentDidUpdate(){
    console.log("I did updated")
  }
/*   componentWillUnmount(){
    console.log("bye")
  } */
  render(){
    console.log("I'm rendering")
    return <div>
      <h1>The number is:  {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>;
  }
}

export default App;
