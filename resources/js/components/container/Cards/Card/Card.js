import React, { Component, useState } from 'react';

import './Card.css';
import Backdrop from '../Backdrop/Backdrop';

class Card extends Component {

  render() {
    const imgStyle =  {
      maxHeight: '100%',
      maxWidth: '100%',
      display: 'block',
      height: '200px',
      objectFit: 'fil',
    }

    return(
      <div className="card">
        <div className="img-wrapper">
          <Backdrop/>
          <img className="card-img-top" style={imgStyle} src={this.props.img}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.content}</p>
          <a 
            href={this.props.link} 
            onClick={this.props.clicked} 
            className="btn btn-info">Click here</a>
        </div>
        <div className="card-footer">
          {this.props.author}
        </div>
      </div>
    );
  }
} 

export default Card;
