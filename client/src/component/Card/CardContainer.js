import React from 'react';
import './CardContainer.scss';
import Card from './Card.js';
import data from '../../data/data.json'

class CardContainer extends React.Component {
  render(){
    return(
      <>
      <h1 className="headerCard">Talks about personal growth</h1>
    <div className='cardContainer'>
				{data.map((item) => {
          console.log(item)
					return(
					<Card {...item}/>
					)})}
			</div>
      </>
    )}
}

export default CardContainer;
