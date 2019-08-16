import React from 'react';
import NavBar1 from '../NavBar/NavBar1.js';
import Graph1 from '../Graphs/Graph1';
import CardContainer from '../Card/CardContainer';
import '../Card/Card.scss';
import '../../component/Graph.scss';

class Graph1Page extends React.Component {
  render(){
    return(
      <>
      <div className='graphPage'>
        <NavBar1/>
        <Graph1/>
        <CardContainer />
      </div>
      </>
    )}
}

export default Graph1Page;
