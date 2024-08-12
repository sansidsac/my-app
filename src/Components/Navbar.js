import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({title = 'TITLE',mode='Light',toggleMode}) => {
  
  const [active,setActive]=useState('active');
  const handleHome=()=>{
    setActive('active');
  }
  const handleAbout=()=>{
    setActive('in-active');
  }

    return <div>
    <nav className={`navbar navbar-expand-lg ${mode === 'light' ? 'bg-light' : 'bg-dark'} ${mode === 'light' ? 'navbar-light' : 'navbar-dark'}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" onClick={handleHome} to="/"><b>{title}</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav col align-self-start">
        <li className="nav-item">
          <Link className={`nav-link ${active}`} onClick={handleHome} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${active === 'active' ? 'in-active' : 'active'}`} onClick={handleAbout} to="/About">About</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick={toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label">Enable {mode==='light'?'Dark':'Light'} Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>;
}

Navbar.propTypes = {
  title : PropTypes.string
};


export default Navbar;