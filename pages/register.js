import React from 'react'
import Router from 'next/router'

import SVGFish from '../assets/img/undraw_fish_bowl.svg'
export default class Register extends React.Component {
  handleClickRegister () {
    Router.push('/login')
  }

  render () {
    return (
      <div className="flex-1 p-5 m-5 d-flex align-items-center justify-content-center">
        <div className="mr-5">
          <h4 className="faded-red" >Register</h4>
          <h1 style={{ fontWeight: 600 }} className="bright-gray mb-4" >Smart Aquarium</h1>
          <div>
            <div className="mb-3">
              <label style={{ fontSize: 13 }} className="gray m-0" for="login-field">Name</label>
              <input placeholder="Input your name"  className="form-control bright-gray p-0"  id="login-field" />
            </div>
            <div className="mb-3">
              <label style={{ fontSize: 13 }} className="gray m-0" for="login-field">Email</label>
              <input type="email" placeholder="Input your email"  className="form-control bright-gray p-0"  id="login-field" />
            </div>
            <div className="mb-2">
              <label style={{ fontSize: 13 }} className="gray m-0" for="login-field">Password</label>
              <input  type="password" placeholder="Input your password" className="form-control bright-gray p-0"  id="login-field" />
            </div>
            <div className="mb-5">
              <label style={{ fontSize: 13 }} className="gray m-0" for="login-field">Password Verification</label>
              <input  type="password" placeholder="Input your password verification" className="form-control bright-gray p-0"  id="login-field" />
            </div>
            <button style={{ fontSize: 14 }} type="button" className="btn btn-dark pl-5 pr-5">Register</button>
            <p style={{ fontSize: 14 }} className="mt-3">Doesn't have an account? <span onClick={this.handleClickRegister.bind(this)} className="pastel-red pointer"> login here</span></p>
          </div>
        </div>
        <div className="ml-5">
          <SVGFish width={500} />
        </div>
      </div>
    )
  }
}