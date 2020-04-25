import React from 'react';
import Link from 'next/link';

export default class Navbar extends React.Component {
  render () {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Smartify</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link href="/">
              <a className="nav-link nav-link">Dashboard</a>
            </Link>
            <Link href="/controller">
              <a className="nav-link nav-link">Controller</a>
            </Link>
            <Link href="/login">
              <a className="nav-link nav-link">Login</a>
            </Link>
            <Link href="/register">
              <a className="nav-link nav-link">Register</a>
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}