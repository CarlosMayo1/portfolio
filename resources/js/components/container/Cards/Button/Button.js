import React from 'react';

import './Button.css';

const button =(props) => (
  <a href={props.link} className="Button" onClick={props.clicked}>{props.children}</a>
);  

export default button;