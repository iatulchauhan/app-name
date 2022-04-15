import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" >{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link className="nav-link text-dark" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link text-dark" to="/about">{props.txtAbout}</Link>
            </li>
          </ul>

          {/* Color Button add toggle funvtion to change the color */}

          <div className='d-flex mx-2'> Toggle Colors For BG </div>
          <div className="d-flex">
            <div className="bg-primary rounded-circle mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
          </div>
          <div className="d-flex">
            <div className="bg-secondary rounded-circle mx-2" onClick={() => { props.toggleMode('secondary') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
          </div>
          <div className="d-flex">
            <div className="bg-success rounded-circle mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
          </div>
          <div className="d-flex">
            <div className="bg-danger rounded-circle mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
          </div>
          <div className="d-flex">
            <div className="bg-warning rounded-circle mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
          </div>
          <div className="d-flex">
            <div className="bg-info rounded-circle  mx-2" onClick={() => { props.toggleMode('info') }} style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
          </div>


          <span className='mx-5'>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={() => { props.toggleMode(null) }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable BW Mode</label>
            </div>
          </span>

          {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  txtAbout: PropTypes.string,
}

// Isrequired Property title Should Not Be Empty Or Blank Or Undefined
// Navbar.propTypes = {title :PropTypes.string.isRequired,
//                     txtAbout:PropTypes.string,}                   

// For Default Value Of Props 
// Navbar.defaultProps ={
//     title:'Set Title',
//     txtAbout:'About Here'
// }