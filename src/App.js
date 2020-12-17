import React from 'react';
import './App.css';
import Card from './components/Card';
import Modal from './components/Modal';
import Filter from './components/Filter';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      rockets:[],
      selectedHeight:0
    }
  }

  componentDidMount(){
    fetch("https://api.spacexdata.com/v4/rockets").then((response)=>response.json())
    .then((rockets)=>{
      this.setState({rockets});
    });
  }

  handleChange=(e)=>{
    this.setState({selectedHeight:e.target.value});
  }


  render(){
    const {rockets,selectedHeight}=this.state;
    const filteredRockets=rockets.filter((rocket)=>
        rocket.height.feet > selectedHeight
    );
    return (
    <div className="container">
      <h1>SpaceX Rockets</h1>
      <Filter onChange={this.handleChange}/>
      <div className="row">
     {filteredRockets.map((rocket)=>{
       return <div className="col-sm-6">
       <Card rocket={rocket}/>
       <Modal rocket={rocket}/>
       </div>
     })}
     </div>
    </div>
  );
}
}

export default App;
