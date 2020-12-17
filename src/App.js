import React from 'react';
import './App.css';
import Card from './components/Card';
import Modal from './components/Modal';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      rockets:[],
    }
  }

  componentDidMount(){
    fetch("https://api.spacexdata.com/v4/rockets").then((response)=>response.json())
    .then((rockets)=>{
      this.setState({rockets});
    });
  }


  render(){
    console.log('Hi there');
    return (
    <div className="container">
      <div className="row">
     {this.state.rockets.map((rocket)=>{
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
