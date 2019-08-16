import React from 'react';
import NavBar1 from '../NavBar/NavBar1.js';
import NavBar2 from '../NavBar/NavBar2.js';
import Graph2 from '../Graphs/Graph2'
import '../../component/Graph.scss'
import CardContainer from '../Card/CardContainer';



class Graph2Page extends React.Component {
  render(){
    return(
      <>
      <div className='graphPage'>
        <NavBar1/>
        <NavBar2/>
        <Graph2/>
        <CardContainer />

      </div>
      </>
    )}
}

export default Graph2Page;
