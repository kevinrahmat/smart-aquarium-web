import React from "react";
import Router from "next/router";
import firebase from "firebase/app";
import { FirebaseAuthProvider } from "@react-firebase/auth";

import { config } from "../config";
import SVGSocial from "../assets/img/undraw_social_life.svg";
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChangeInput({ state, value }) {
    this.setState({
      [state]: value,
    });
  }

  handleClickSubmit() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log(error);
      });
  }

  handleClickRegister() {
    Router.push("/register");
  }

  render() {
    return (
      <div className="flex-1 p-5 m-5 d-flex align-items-center justify-content-center">
        <div className="mr-5">
          <h4 className="faded-red">Login</h4>
          <h1 style={{ fontWeight: 600 }} className="bright-gray mb-4">
            Smart Aquarium
          </h1>
          <div>
            <div className="mb-3">
              <label
                style={{ fontSize: 13 }}
                className="gray m-0"
                for="login-field"
              >
                Email
              </label>
              <input
                type="email"
                onChange={(e) =>
                  this.handleChangeInput({
                    state: "email",
                    value: e.target.value,
                  })
                }
                placeholder="Input your email"
                className="form-control bright-gray p-0"
                id="login-field"
              />
            </div>
            <div className="mb-5">
              <label
                style={{ fontSize: 13 }}
                className="gray m-0"
                for="login-field"
              >
                Password
              </label>
              <input
                type="password"
                onChange={(e) =>
                  this.handleChangeInput({
                    state: "password",
                    value: e.target.value,
                  })
                }
                placeholder="Input your password"
                className="form-control bright-gray p-0"
                id="login-field"
              />
            </div>
            <button
              onClick={this.handleClickSubmit.bind(this)}
              style={{ fontSize: 14 }}
              type="button"
              className="btn btn-dark pl-5 pr-5"
            >
              Login
            </button>
            <p style={{ fontSize: 14 }} className="mt-3">
              Doesn't have an account?{" "}
              <span
                onClick={this.handleClickRegister.bind(this)}
                className="pastel-red pointer"
              >
                {" "}
                register here
              </span>
            </p>
          </div>
        </div>
        <div className="ml-5">
          <SVGSocial width={500} />
        </div>
      </div>
    );
  }
}
