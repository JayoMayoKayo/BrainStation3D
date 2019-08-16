import React from 'react';
import NavBar1 from '../NavBar/NavBar1.js';
import Graph3 from '../Graphs/Graph3'
import '../../component/Graph.scss'

class Graph3Page extends React.Component {
  render(){
    return(
      <>
      <div className='graphPage'>
        <NavBar1/>
        <Graph3/>
      </div>
      </>
    )}
}

export default Graph3Page;
