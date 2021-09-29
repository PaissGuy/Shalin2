import React , { Component } from 'react';

class Timer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count : 0,
            IntervalId : 0
        }
        this.tick = this.tick.bind(this);
    }

    componentWillUnmount(){
        clearInterval(this.state.IntervalId)
    }
    
    componentDidMount() {
        
            {this.myInterval = this.props.server.IsRunning ? setInterval(() => 
                { this.tick()}, 1000) : null}
            this.setState({IntervalId : this.myInterval})
            console.log(this.state.count)
    }

   componentDidUpdate(){
       //console.log(this.state.count)
       
   }

    tick() {
        this.setState({
            count: this.state.count + 1
        })
        this.props.TogglePrice(this.props.server,this.state.count)
    }

    
    render () {
        {
            var hour = Math.floor(this.state.count/3600),
            minutes = Math.floor((this.state.count - hour*3600)/60),
            seconds = (this.state.count - hour*3600 -minutes*60 ),
            temp = new Date(); 
            temp.setHours(hour, minutes, seconds);
        }
        
        return(
            <div>
                {temp.getHours()}:{temp.getMinutes()}:{temp.getSeconds()}
            </div>
        );
    }
}

export default Timer;