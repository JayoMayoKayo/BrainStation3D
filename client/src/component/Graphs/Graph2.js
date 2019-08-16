import React from 'react';
import '../../component/Graph.scss'

class Graph extends React.Component {

	render() {
		return (
      <>
      <div className="graph">
      <iframe src={`https://public.tableau.com/views/Test_Mock/Sheet1?:showVizHome=no&:embed=true`}
        width="645" height="955"></iframe>
      </div>
    </>
		);
	}
}

export default Graph;