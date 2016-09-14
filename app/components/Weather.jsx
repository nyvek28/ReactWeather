var React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),
    openWeatherMap = require('openWeatherMap'),
    ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err){
      that.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });
  },
  render: function(){

    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className = 'text-center'>Fetching weather...</h3>
      }else if(temp && location){
        return <WeatherMessage location = {location} temp = {temp}/>
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message = {errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className = 'text-center'>Get Weather</h1>
        <WeatherForm placeholder = "Enter city" btnText = "Get Weather" onSearch = {this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
