import React from 'react';

class HandlingMultipleForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', message: '', email: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(key) {
        return function (e) {
            var state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);

    }

    handleSubmit(event) {
        var data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        alert('Hello ' + data.name + ', your message is: ' + data.message);

        /* POST DATAS TO PHP HERE...
          var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", "form/form-submit.php", true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
             xmlhttp.send(data);
        */

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <br />
                    <input type="text" value={this.state.name} onChange={this.handleChange('name')} />
                </label>
                <label>
                    Email: <br />
                    <input type="email" value={this.state.email} onChange={this.handleChange('email')} />
                </label>
                <label>
                    Message:<br />
                    <textarea rows="4" cols="50" type="text" value={this.state.message} onChange={this.handleChange('message')} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default HandlingMultipleForms;