import React from "react";
import Link from "next/link";
import firebase from "firebase/app";
import { IfFirebaseAuthed } from "@react-firebase/auth";

export default class Navbar extends React.Component {
  handleLogout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Smartify
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link href="/">
              <a className="nav-link nav-link">Monitoring</a>
            </Link>
            <Link href="/controller">
              <a className="nav-link nav-link">Controller</a>
            </Link>
          </div>
          <IfFirebaseAuthed>
            {() => {
              return (
                <div className="navbar-nav pointer">
                  <a onClick={this.handleLogout.bind(this)} className="nav-link nav-link">Logout</a>
                </div>
              );
            }}
          </IfFirebaseAuthed>
        </div>
      </nav>
    );
  }
}
