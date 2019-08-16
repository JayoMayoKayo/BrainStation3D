import React from 'react';
import '../../App.css'
import {Link} from 'react-router-dom'


class NavBar extends React.Component {

	render() {
		return (
      <>
      <div className="navbar">
        <div className="navbar__logo">
        </div>
        <div className="navbar__links">
          <div className="navbar__links-text">
            <Link to ='/graph-1'>Discover</Link>
          </div>
          <div className="navbar__links-text">
            <Link to ='/graph-2'>Cycling</Link>
          </div>
          <div className="navbar__links-text">
            <Link to ='/graph-3'>Pizza</Link>
          </div>
        </div>
      </div>
    </>
		);
	}
}

export default NavBar;