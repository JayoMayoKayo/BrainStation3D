import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import Graph1 from '../Graphs/Graph1';
import Card from '../Card/Card.js';

class Graph1Page extends React.Component {
  render(){
    return(
      <>
        <NavBar />
        <Graph1/>
        <Card />
      </>
    )}
}

export default Graph1Page;
