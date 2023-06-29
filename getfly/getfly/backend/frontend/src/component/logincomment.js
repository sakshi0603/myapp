import React, { Component, useState } from 'react'
import './login.css'
import img from './image/logo.png'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login success");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./Basic";
        }
      });
  }
  render() {
    return (
      <>
        <div className='body'>
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="container">

            <div className="wrapper">
              <div className="title">
                <h3>Login </h3>

              </div>
              <p>Welcome to product name, Please login to your account</p>
              <form onSubmit={this.handleSubmit}>
                <div className="row">

                  <h3>College Id</h3>
                  <i className="fa-solid fa-user"></i>
                  <input type="email" id="email" placeholder="id@pvppcoe.ac.in" onChange={(e) => this.setState({ email: e.target.value })} />
                  {/* {userErr ? <label ><strong>Please enter right ID</strong></label> : ""} */}

                </div>
                <div className="row">

                  <h3>Password</h3>
                  <i className="fa-solid fa-eye" id="eyeicon"></i>
                  <input type="password" id="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                  {/* {passErr ? <label ><strong>Please enter right Password</strong></label> : ""} */}

                </div>

                <div className="row button">
                  <input type="submit" value="Login" />

                </div>

                <p className="forgot-password text-right">
                  Don't have an account? <a href="/">Sign Up</a>
                </p>

                <br></br>

                <footer>
                  <a href="">www.getflytechnology.com</a>
                </footer>

              </form>
            </div>
          </div>
          <script src="valid.js"></script>
        </div>

      </>
    );
  }
}
