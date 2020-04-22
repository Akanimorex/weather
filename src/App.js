import React, {Component} from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';








class App extends Component{
  

  state ={
    lat:null,
    errorMessage:''
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=> this.setState({lat:position.coords.latitude}),
      (err)=> this.setState({errorMessage:err.message})
      
  
    );

  }


  render(){

    if (this.state.errorMessage && !this.state.lat){
      return <div>
        <h1>Error:{this.state.errorMessage}</h1>
      </div>
    }
    if (!this.state.errorMessage && this.state.lat){
      return <div>
        
        <SeasonDisplay lat={this.state.lat}/>
        
      </div>
    }

    return <Loading message="Please accept location request"/>



    
    
  }



}


export default App;
  