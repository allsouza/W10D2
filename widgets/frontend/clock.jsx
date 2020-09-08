import React from "react";

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
          time: new Date(),
        }
        this.tick = this.tick.bind(this);
        this.time = this.time.bind(this);
    }
    
    tick (){
        this.setState({time: new Date()});
    }

    time() {
      return this.state.time.toTimeString().slice(0,8)
    }

    date () {
      return this.state.time.toString().slice(0, 15)
    }

    componentDidMount() {
      this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render(){

        return(
        <>
          <h1>Clock</h1>
          <div className="clock">
          <h2><span>Time:</span> <span>{this.time()}</span></h2>
          <h2><span>Date:</span> <span>{this.date()}</span></h2>
          </div>
        </>)

    }
}

export default Clock;