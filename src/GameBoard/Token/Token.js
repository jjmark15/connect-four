import React from 'react';
import './Token.css';

function Token(props) {
  return (
    <div className={`circle ${props.tokencolour}`} / >
  );
}

export default Token;
