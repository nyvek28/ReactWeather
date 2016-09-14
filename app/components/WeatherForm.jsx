var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var cityRef = this.refs.city,
        city = cityRef.value;

    if(city.length > 0){
      cityRef.value = '';
      this.props.onSearch(city);
    }
  },
  render: function(){

    var placeholder = this.props.placeholder,
        btnText = this.props.btnText;
    return (
      <div>
        <form onSubmit = {this.onFormSubmit}>
          <input type = "text" placeholder = {placeholder} ref = "city"/>
          <button className = 'button expanded hollow'>{btnText}</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
