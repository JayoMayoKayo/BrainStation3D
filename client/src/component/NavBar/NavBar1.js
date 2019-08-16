import React from 'react';
import {Link} from 'react-router-dom'


class NavBar1 extends React.Component {

	render() {
		return (
      <>
      <div className="navbar">
      <div className="navbar__logo">
            <img className="navbar__logo-img" src={`https://upload.wikimedia.org/wikipedia/commons/a/aa/TED_three_letter_logo.svg`}/>
          </div>
        <div className="navbar__links">
          <div className="navbar__links-text">
            <Link className="navbar__links-text--stuff" to ='/graph-1'>Trending</Link>
          </div>
          <div className="navbar__links-text">
            <Link className="navbar__links-text--stuff"  to ='/graph-2'>Controversy</Link>
          </div>
          <div className="navbar__links-text">
            <Link className="navbar__links-text--stuff" to ='/graph-3'>Interest</Link>
          </div>
        </div>
      </div>
    </>
		);
	}
}

export default NavBar1;