import React from 'react';

class Clock extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      time: new Date()
    };
    this.interval = 0;
    this.tick = this.tick.bind(this);
  }

  componentDidMount () {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount () {
    clearInterval(this.interval);
  }

  tick () {
    this.setState({time: new Date()});
  }

  render () {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    return (
      <div>
        <h1 className ='clock'>Clock</h1>
        <p className ='curtime'>{hours}:{minutes}:{seconds}</p>
      </div>
    );

  }
}

export default Clock;
