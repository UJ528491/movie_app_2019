// import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";
// import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [] // 미래에 만들 변수를 반드시 선언할 필요없지만 좋은 습관임
  };
  getMovies = async() =>{
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json ");
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading} = this.state;  //es6
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
