var React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),
    openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err){
      that.setState({isLoading: false});
      alert(err);
    });
  },
  render: function(){

    var {isLoading, temp, location} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather...</h3>
      }else if(temp && location){
        return <WeatherMessage location = {location} temp = {temp}/>
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm placeholder = "Enter city" btnText = "Get Weather" onSearch = {this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
