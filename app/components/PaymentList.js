import React, { Component } from 'react';
import Payment from './Payment';
import data from '../data';

class PaymentList extends Component {
    render() {
        return (
           <div className="payments-wrapper">
            <ul className="list-headers">
                <li className="header">Account Name</li>
                <li className="header">Type</li>
                <li className="header">Account Number</li>
                <li className="header">CCY</li>
                <li className="header">Balance</li>
                <li className="header">Last Transfer</li>
                <li className="header">Trustworthiness</li>
                <li className="header">Status</li>
            </ul>
            <ul className="payments-list">
             {data.map((payment) => {
                 return (
                        <Payment
                            key={payment.id}
                            accountName={payment.account_name}
                            currency={payment.currency}
                            type={payment.type}
                            accountNumber={payment.account}
                            balance={payment.balance}
                            lastTransfer={payment.last_transfer}
                            trust={payment.trust}
                            status={payment.status}
                            className={payment.status}
                         />
                 )
             })}
            
            </ul>
           </div>
        )
    }
}

export default PaymentList;