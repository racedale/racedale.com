import React  from 'react';
import ReactDOM  from 'react-dom';

/*
  App
*/

var App = React.createClass({
  // getInitialState : function() {
  //   return {
  //     fishes : {},
  //     order : {}
  //   }
  // },
  // addToOrder : function(key) {
  //   this.state.order[key] = this.state.order[key] + 1 || 1;
  //   this.setState({ order : this.state.order });
  // },
  // addFish : function(fish) {
  //   var timestamp = (new Date()).getTime();
  //   // update the state object
  //   this.state.fishes['fish-' + timestamp] = fish;
  //   // set the state
  //   this.setState({ fishes : this.state.fishes });
  // },
  // loadSamples : function() {
  //   this.setState({
  //     fishes : require('./sample-fishes')
  //   });
  // },
  // renderFish : function(key){
  //   return <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>
  // },
  render: function () {
      return (
    <Slider>
      <div itemStyle={{ backgroundColor: '#a2d7c7' }}>
        <div className="content">Hello, world.</div>
      </div>
      <div itemStyle={{ backgroundColor: '#353330' }}>
        <div className="content">Sup?</div>
      </div>
      <div itemClass="has-overlay" itemStyle={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover' }}>
        <div className="content">Yo.</div>
      </div>
    </Slider>

      );
  }

});

export default App;