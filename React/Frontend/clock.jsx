import React from 'react';

class Clock extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      time: new Date()
    };
    console.log(this.state.time);
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
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    let day = this.state.time.getDay();
    let date = this.state.time.getDate();
    let month = this.state.time.getMonth();
    let year = this.state.time.getYear();
    return (
      <div>
        Clock
        <div>
          <div>
            <h1 className ='clock'>Time:</h1>
            <p className ='curtime'>{hours}:{minutes}:{seconds}</p>
          </div>
          <div>
            <h1 className ='clock'>Date:</h1>
            <p className ='curtime'>{days[day]} {months[month]} {date} {year + 1900}</p>
          </div>
        </div>
      </div>
    );

  }
}

export default Clock;
