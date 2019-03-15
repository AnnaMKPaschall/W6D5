import React from 'react'; 

class Clock extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            time: new Date()
        };
    }

    render() {
        return (
        <>
        <div id="main-clock">
            <h1 id="clock-header">Clock</h1>
            <br/>
            <div id="clock"> 
                <div id="timeheader">
                    <h3>Time:</h3>
                    <h3>Date:</h3>
                </div>

                <div id="livetime">
                    {(this.state.time).toLocaleTimeString('en-US')}
                        <br></br>
                    {(this.state.time).toDateString()}
                </div>
            </div>
        </div>
        </>
        )
    }

    componentDidMount() {
        const ticking = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(ticking);
    }

    tick() {
        this.setState({
            time: new Date() //this isnt DRY =/
        })
    }
}



export default Clock; 