import React from 'react'
import {
  Link
} from "react-router-dom";

class Nav extends React.Component {



  render() {


    return (
      <div className = "nav" >
          <ul>
              <li><Link to="/">Home </Link></li>
              <li><Link to="/begin">Begin </Link></li>
              <li><Link to="/event">event </Link></li>
               <li><Link to="/redux">redux </Link></li>
                <li><Link to="/redux2">redux2 </Link></li>
              <li><Link to="/about">about </Link></li>
              <li><Link to="/post">post </Link></li>
               <li><Link to="/wpbooks">wp books </Link></li>
              <li><Link to="/links">一些链接 </Link></li>
          </ul>
      </div>
    );


  }
}



export default Nav