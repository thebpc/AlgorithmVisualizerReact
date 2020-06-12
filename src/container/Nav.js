import React from "react";
import "../css/Nav.css";
import { Link, withRouter } from "react-router-dom";

function Nav(props) {

  const [activeRouteName,setActiveRouteName] = React.useState("HOME");
  
  function changeActiveRoute(name){
    console.log(name);
    setActiveRouteName(name);
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={activeRouteName==='HOME'?"nav-item active activate":"nav-item"} onClick={()=>changeActiveRoute('HOME')}>
            <Link  className="nav-link" to="/Home">
              Home
            </Link>
          </li>
          <li className={activeRouteName==='BS'?"nav-item active activate":"nav-item"} onClick={()=>changeActiveRoute('BS')}>
            <Link  className="nav-link" to="/BS">
              Binary Search
            </Link>
          </li>
          <li className={activeRouteName==='ABOUT'?"nav-item active activate":"nav-item"} onClick={()=>changeActiveRoute('ABOUT')}>
            <Link  className="nav-link" to="/about">
              About
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
    // <div className="nav">
    //  {props.name}
    //  <div style={{"float":"right"}}><Link to="/Home">Home</Link></div>
    //  <div style={{"float":"right"}}><Link to="/About">About</Link></div>
    //  <div style={{"float":"right"}}><Link to="/BS">Binary Search</Link></div>
    // </div>
  );
}

export default withRouter(Nav);
