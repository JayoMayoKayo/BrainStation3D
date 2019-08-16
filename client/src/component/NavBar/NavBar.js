import React from 'react';
import '../../App.css'


class NavBar extends React.Component {

	render() {
		return (
      <>
      <div className="navbar">
        <div className="navbar__logo">
        </div>
        <div className="navbar__links">
          <div className="navbar__links-text">
            {/* <Link to ='/chart-1'>Chart 1</Link> */}
            hello
          </div>
          <div className="navbar__links-text">
            {/* <Link to ='/chart-2'>Chart 2</Link> */}
            world
          </div>
          <div className="navbar__links-text">
            {/* <Link to ='/chart-3'>Chart 3</Link> */}
            wut
          </div>
          <div className="navbar__links-text">
            {/* <Link to ='/chart-4'>Chart 4</Link> */}
            WAT
          </div>
        </div>
      </div>
    </>
		);
	}
}

export default NavBar;