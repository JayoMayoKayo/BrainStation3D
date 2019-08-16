import React from 'react';
import '../../component/Graph.scss'

class Graph extends React.Component {

	render() {
		return (
      <>
      <div className="graph">
      <iframe className="graph__frame" src={`https://public.tableau.com/views/Test_Mock/Sheet1?:showVizHome=no&:embed=true`} width="540" height="450"/>; 
      </div>
    </>
		);
	}
}

export default Graph;