import React from 'react';

class SimpleForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit(e){
        console.log('Hello ' + this.state.name);
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <input type="Submit" value="Submit"/>
                </form>
        </div>
        );
    }


}

export default SimpleForm;