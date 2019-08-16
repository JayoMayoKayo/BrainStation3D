import React from 'react';
import './CardContainer.scss';
import Card from './Card.js';

class CardContainer extends React.Component {
  render(){
    return(
      <>
        <div className="cardContainer">
          <Card />
          <Card />
          <Card />
        </div>
      </>
    )}
}

export default CardContainer;
