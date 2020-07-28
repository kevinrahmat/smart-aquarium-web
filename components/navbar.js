import React from 'react';
import Link from 'next/link';

export default class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Smartify</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link href="/">
              <a className="nav-link nav-link">Dashboard</a>
            </Link>
            <Link href="/controller">
              <a className="nav-link nav-link">Controller</a>
            </Link>
            {/* <Link href="/login">
              <a className="nav-link nav-link">Login</a>
            </Link>
            <Link href="/register">
              <a className="nav-link nav-link">Register</a>
            </Link> */}
          </div>
        </div>
      </nav>
    )
  }
}