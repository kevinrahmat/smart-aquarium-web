import React from "react";
import firebase from "firebase";
import Router from "next/router";
import PasswordStrengthBar from "react-password-strength-bar";

import SVGFish from "../assets/img/undraw_fish_bowl.svg";
export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_verification: "",
    };
  }

  handleChangeInput({ state, value }) {
    this.setState({
      [state]: value,
    });
  }

  sendUserEmailVerification() {
    var user = firebase.auth().currentUser;
    user
      .sendEmailVerification()
      .then(function () {
        console.log("email sent");
      })
      .catch(function (error) {
        console.log("email error");
      });
  }

  handleClickSubmit() {
    const { email, password, password_verification } = this.state;
    if (password !== password_verification) {
      alert("Password isn't not the same");
    } else {
      if (password.length < 8) {
        alert("You have entered less than 8 characters for password");
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            // this.sendUserEmailVerification();
            Router.push("/");
          })
          .catch(function (error) {
            alert(error.message);
          });
      }
    }
  }

  handleClickRegister() {
    Router.push("/");
  }

  render() {
    const { password, password_verification } = this.state;

    return (
      <div className="flex-1 p-5 m-5 d-flex align-items-center justify-content-center">
        <div className="mr-5">
          <h4 className="faded-red">Register</h4>
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
                Name
              </label>
              <input
                onChange={(e) =>
                  this.handleChangeInput({
                    state: "name",
                    value: e.target.value,
                  })
                }
                placeholder="Input your name"
                className="form-control bright-gray p-0"
                id="login-field"
              />
            </div>
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
            <div className="mb-2">
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
            <div className="mb-2">
              <label
                style={{ fontSize: 13 }}
                className="gray m-0"
                for="login-field"
              >
                Password Verification
              </label>
              <input
                type="password"
                onChange={(e) =>
                  this.handleChangeInput({
                    state: "password_verification",
                    value: e.target.value,
                  })
                }
                placeholder="Input your password verification"
                className="form-control bright-gray p-0 mb-2"
                id="login-field"
              />
              <PasswordStrengthBar password={password} />
            </div>
            <button
              onClick={this.handleClickSubmit.bind(this)}
              style={{ fontSize: 14 }}
              type="button"
              className="btn btn-dark pl-5 pr-5"
            >
              Register
            </button>
            <p style={{ fontSize: 14 }} className="mt-3">
              Already have an account?{" "}
              <span
                onClick={this.handleClickRegister.bind(this)}
                className="pastel-red pointer"
              >
                {" "}
                login here
              </span>
            </p>
          </div>
        </div>
        <div className="ml-5">
          <SVGFish width={500} />
        </div>
      </div>
    );
  }
}
