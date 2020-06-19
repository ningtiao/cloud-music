import React, { Component } from 'react'

export default class ProfilePage extends Component {
    showMessage = () => {
        alert('Followed', + this.props.user)
    };
    
    handleClick = () => {
        setTimeout(this.showMessage, 3000);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Follow</button>
            </div>
        )
    }
}
