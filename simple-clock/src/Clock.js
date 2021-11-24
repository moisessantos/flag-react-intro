import React from "react";

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
            isPlaying: true
        }
        this.interval = null;
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    stop() {
        clearInterval(this.interval);
        this.setState({
            isPlaying: false
        })
    }

    start() {
        this.interval = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString(),
                isPlaying: true
            });
        }, 1000);
    }

    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <p>{this.state.time}</p>
                <button onClick={this.stop} disabled={!this.state.isPlaying}>Stop</button>
                <button onClick={this.start} disabled={this.state.isPlaying}>Start</button>
                <button onClick={() => {
                    if (this.state.isPlaying) {
                        this.stop();
                    } else {
                        this.start();
                    }
                }}>Start/Stop</button>
            </div>)
    }
}

export default Clock;