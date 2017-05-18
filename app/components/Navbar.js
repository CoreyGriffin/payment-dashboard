import React from 'react';

function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="nav-upper">
        <h2 className="logo">Payments</h2>
        <input type="text" className="input" placeholder="Search" />
        <span className="notification"></span>
      </div>
      <div className="nav-lower">
        <ul className="navigation-list">
          <li>Dashboard</li>
          <li className="active-tab">Accounts</li>
          <li>Customers</li>
          <li>Cards</li>
          <li>Reports</li>
          <li>Customer Support</li>
          <li>User Management</li>
          <li>More</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
