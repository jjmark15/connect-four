import React, { Component } from 'react';
import './Token.css';

class Token extends Component {

  render() {
    return (
      <div className={`circle ${this.props.tokencolour}`} / >
    );
  }
}

export default Token;
