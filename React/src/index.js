import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';

ReactDOM.render(
  <div>
    <h1>React Task</h1>
    <input type="checkbox" />
    <User firstName="Rajarajan" lastName="Ravikumar"/>
  </div>,
  document.getElementById('root'),
);