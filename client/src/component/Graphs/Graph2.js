import React from 'react';
import '../../component/Graph.scss'

class Graph extends React.Component {

	render() {
		return (
      <>
      <div className="graph">
      <iframe src={`https://public.tableau.com/views/graph2_15659841665870/Sheet1?:showVizHome=no&:embed=true`}
       width="90%" height="600"></iframe>
      </div>
    </>
		);
	}
}

export default Graph;