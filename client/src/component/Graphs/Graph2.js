import React from 'react';
import '../../component/Graph.scss'

class Graph extends React.Component {

	render() {
		return (
      <>
      <div className="graph">
      <iframe src={`https://public.tableau.com/profile/kevin1262#!/vizhome/Graph3_15659859838100/Chart2?:showVizHome=no&:embed=true`}
       width="35%" height="600"></iframe>
      </div>
    </>
		);
	}
}

export default Graph;