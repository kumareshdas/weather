import React, { Component } from 'react';
import one from '../../images/one.jpg';
import two from'../../images/two.jpg';
import three from'../../images/three.jpg';
import four from'../../images/four.jpg';
import Search from './weather_components/Search';
import Result from './weather_components/Result';
import Form from './weather_components/Form';
import $ from 'jquery';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {searchText:" ",result:""};
  }


updateWeather(weather){

  this.setState({
    searchText: weather

  //  result: weather
    });
};
collectResult(searching){
  var currentState = this;

if (searching==="search") {
  $.get( "http://api.openweathermap.org/data/2.5/weather?appid=e507bf848ac3df7d53d7855049a53dec&q="+this.state.searchText, function( data )
  {

  //get value from state
  // var temp=this.state.searchText;
  //putting that value to result
            currentState.setState({
                result: data.main.temp

            });
// this.state.searchText;
  });


}
else {
    this.setState({
      searchText:""
    })
}

    //});
  //  console.log(searching);
}
  render() {
    return (
      <div className="Weather">
        <div className="App-Weather">
           <div className="row">

            <div className="col-xs-6 col-sm-3"> <img src={one} className="rounded float-left" alt="..."></img> </div>
             <div


             className="col-xs-6 col-sm-3"> <img src={two} className="rounded float-right" alt="..."></img> </div>
            <div className="col-xs-6 col-sm-3"> <img src={three} className="rounded float-left" alt="..."></img> </div>
            <div className="col-xs-6 col-sm-3"> <img src={four} className="rounded float-left" alt="..."></img> </div>
         </div>

<br/>
      <Search  onUpdateHandeler={this.updateWeather.bind(this)} currentText={this.state.searchText}/>
      <br/>
      <Form onload={this.collectResult.bind(this)}/>
      <Result loader={this.state.result}/>


        </div>
      </div>



    );
  }

}
export default Weather;
