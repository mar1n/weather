import React from 'react';

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The Water would boil.</p>
    }
    return <p>The Water would not boil.</p>
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return(
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />

                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

const scaleNames = {
    c : 'Celsius',
    f : 'Fahrenheit'
}


class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}
export default Calculator;