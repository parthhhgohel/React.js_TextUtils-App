import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
   return (
     <nav className={`navbar px-3 navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
       <li>
        {/* <Link className="navbar-brand" to="/">
            {props.title}
         </Link> */}
        <a className="navbar-brand" href="#">
            {props.title}
         </a>
       </li>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="/navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
           <li className="nav-item">
             {/* <Link className="nav-link active" to="/">Home</Link> */}
             <a className="nav-link active" href="#">Home</a>
           </li>
           <li className="nav-item active">
             {/* <Link className="nav-link active" to="/about">{props.aboutText}</Link> */}
             <a className="nav-link active" href="#">{props.aboutText}</a>
           </li>
         </ul>
       </div>
       <div className={`form-check form-switch  text-${props.mode === 'light'? 'dark':'light'}`}>
         <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
       </div>
     </nav>
   );
 }

 Navbar.propTypes = {
     title: PropTypes.string,
     aboutText: PropTypes.string
 };