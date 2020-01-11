import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props)
        this.cityList = [];
        this.state = {
            name: this.cityList,
            text: ""
        };
        //this.addClick = this.addClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addClick = () => {
        this.cityList.push(<div id="city"><p>{this.state.text}</p></div>);
        this.setState({
            name: this.cityList,
            text: ""
        });
    }

    handleChange(e) {
        let getCityName = e.target.value;
        this.setState({
            text: getCityName
        });
    }

    render() {
        return(
            <div>
                <input value={this.state.text} onChange={this.handleChange} type="text" />
                <input value="Add" onClick={this.addClick} type="submit" />
                <div>
                    {this.cityList}
                </div>
            </div>

        );
    }
}

export default Add;