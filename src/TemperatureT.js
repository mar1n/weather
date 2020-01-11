import React from 'react';

function Boilingwater(props) {
    if(props.celsius >= 100) {
        return <h1>The water would boil in {props.celsius}</h1>
    }

    return <h1>The water wouldn 't boil in {props.celsius}</h1>
}

const scaleTemperature = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {temperature:''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // Before: this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        // Before: const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (

            <div>
                <fieldset>
                    <legend>Thew Temperature is in {scaleTemperature[scale]}</legend>
                    <input value={temperature} onChange={this.handleChange}/>
                    <Boilingwater celsius={parseFloat(temperature)}/>
                </fieldset>

            </div>
        );
    }
}

class Temperature extends React.Component {
    constructor(props){
        super(props);
        this.state = {temperature: '', scale: 'c'};
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return(
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <Boilingwater celsius={parseFloat(celsius)} />
            </div>

        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
export default Temperature;