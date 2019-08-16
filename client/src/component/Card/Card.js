import React from 'react';
import NavBar1 from '../NavBar/NavBar1'
import './Card.scss';

class Card extends React.Component {
  render(){
    return(
      <>
        <div className="card">
          <div className="card__videoPreview">
            <img src={`https://upload.wikimedia.org/wikipedia/commons/a/aa/TED_three_letter_logo.svg`}/>
          </div>
          <div className="card__videoTitle">
            <p>{this.props.title}</p>
          </div>
          <div className="card__videoDescription">
            <p>{this.props.description}</p>
          </div>
          <div className="card__videoDescription">
            <p>{this.props.name}</p>
          </div>
        </div>
      </>
    )}
}

export default Card;