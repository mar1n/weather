import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {button: true};
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        console.log('Test');
        this.setState({button: !this.state.button});
        e.preventDefault();
    }

    render() {
        let button = this.state.button;
        return(
            <div>
                <button onClick={this.handleClick}>
                    {button ? 'On' : 'Off'}
                </button>
            </div>
        );
    }
}

export default Toggle;
