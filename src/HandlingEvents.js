import React from 'react';

class HandlingEvents extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggle: true};

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e){
        e.preventDefault();
        this.setState({isToggle: !this.state.isToggle});
        console.log('Smile pleas!');
    }

    render() {
        return(
            <button onClick={this.handleClick}>{this.state.isToggle ? 'ON' : 'OFF'}</button>
        );
    }
}

export default HandlingEvents;