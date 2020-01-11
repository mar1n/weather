import React from 'react';
import logo from './logo.svg';
import './App.css';


function Welcome() {
    return(
        <h1>Welcome back!</h1>
    );
}

function ByeBye() {
    return(
        <h1>Bey Bey</h1>
    );
}
class ConditionalRendering extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        const state = this.props.state;
            if(state) {
               return <Welcome/>;
            }
            return <ByeBye/>

    }
}

function LoginButton(props) {
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: true};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({login: !this.state.login});
    }

    handleLogoutClick() {
        this.setState({login: !this.state.login});
    }

    render() {
        const log = this.state.login;

            if(log){
                return <LoginButton onClick={this.handleLoginClick}/>
            }
            return <LogoutButton onClick={this.handleLogoutClick}/>

    };
}

function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }
    const divStyle = {
        background: 'orange',
        height: 100,
        weight: 100
    }
    return (
        <div class="banner" style={divStyle}>
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {warning: true};
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        this.setState(preventState => ({
            warning: !preventState.warning
        }));
    }

    render() {
        return(
            <div>
            <WarningBanner warn={this.state.warning} />
                <button onClick={this.handleButtonClick}>
                    {this.state.warning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }


}

export default Page;