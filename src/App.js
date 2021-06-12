import {Component} from 'react';
import './App.css';
import React  from 'react';


class App extends React.Component {
  state = {
    
      fullName: " meriem dridi",
      bio: " i love money  ",
      imgSrc: "/Meriem.jpg",
      imgAlt:'meriem',
      profession: "manager",
      show: true,
      timer : 0 
  };

  handleClick= e => {
    e.preventDefault();
    this.setState({...this.state,
      show: !this.state.show })
  }
  Increment =()=>{
    this.setState(
      {...this.state,timer:this.state.timer+1}
    )
  }
  componentDidMount(){
    setInterval (this.Increment,1000)
  }
    
  render(){
    return (
      <div className="App" > 
       <button style={{
        marginTop:'10%',
        height:'50px',
        width:'30%',
        backgroundColor:'yellow',
        color:'black',
        fontFamily:'800',
        border:'none',
       
      }}
      onClick={this.handleClick}> Hello click here to join </button>
      {this.state.show==true?<div style={{}}>
        <h1 style={{backgroundColor: "lightblue"}}>My name : {this.state.fullName}</h1>
        <h2 style={{backgroundColor: "lightblue"}}>I am : {this.state.profession}</h2>
        <h3 style={{backgroundColor: "red"}}>{this.state.bio}</h3>
        <p>timer : {this.state.timer}</p>
        <img alt={this.state.imgAlt} src={this.state.imgSrc}/>
        
      </div>:<div></div>}    
      </div>
      
    );}
  }
export default App;
