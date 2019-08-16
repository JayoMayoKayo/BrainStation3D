import React from 'react';
import '../../App.css'


class Graph extends React.Component {

	render() {
		return (
      <>
      <div className="graph">
      <iframe src={`https://i.imgur.com/A8eQsll.jpg`} width="540" height="450"/>; 
      </div>
    </>
		);
	}
}

export default Graph;