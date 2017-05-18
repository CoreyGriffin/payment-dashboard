import React, { Component } from 'react';
import Navbar from './Navbar';
import PaymentList from './PaymentList'


class App extends Component {
    render() {
        return (
          <div className="container">
            <Navbar />
            <PaymentList />
            <button title="Add new account" className="add-btn">+</button>
          </div>
        )
    }
}

export default App;
