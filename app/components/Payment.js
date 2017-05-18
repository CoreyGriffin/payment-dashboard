import React, { Component } from 'react';

class Payment extends Component {
    render() {
        return (
            <li key={this.props.id} className="payment">
                <span className="account-name">{this.props.accountName} - {this.props.currency}</span>
                <span className="account-type">{this.props.type}</span>
                <span className="account-number">{this.props.accountNumber}</span>
                <span className="account-currency">{this.props.currency}</span>
                <span className="acount-balance">{this.props.balance}</span>
                <span className="last-transfer">{this.props.lastTransfer}</span>
                <div className={"trustworthiness " + this.props.trust }>
                 <div className="bookmark-solid icon"></div> 
                 <div className="standing">{this.props.trust}</div>    
                </div>
                <span className={"status " + this.props.className}>{this.props.status}</span>
                <span className="more-circle"></span>
            </li>
        )
    }
}

export default Payment;