import React, {Component} from 'react';

// child functional component for generating a navbar

const GenerateNavBar = (props) => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <h3 className="user-counter">{props.totalUsers} users online</h3>
    </nav>
  )
}

export default GenerateNavBar;