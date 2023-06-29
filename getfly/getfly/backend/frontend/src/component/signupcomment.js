import React, { Component } from 'react'
import img from './image/logo.png'
import './login.css'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            cpassword: "",
            seattype: "",
            year: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { email, password, cpassword, seattype, year } = this.state;
        console.log(email, password, cpassword, seattype, year);
        fetch("http://localhost:5000/signup", {
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
                cpassword,
                seattype,
                year,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status === "ok") {
                    alert("Signup Successful");
                    window.localStorage.setItem("token", data.data);
                    window.location.href = "./login";
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
                                <h3>Signup</h3>

                            </div>
                            <p>Welcome to product name, Please login to your account</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">

                                    <h3>College Id</h3>
                                    <i className="fa-solid fa-user" />
                                    <input type="text" name="email" id="email" placeholder="id@pvppcoe.ac.in" required="" onChange={(e) => this.setState({ email: e.target.value })} />
                                    <p id="email_error"></p>
                                </div>



                                <div className="row">
                                    <h3>Password</h3>
                                    <i className="fa-solid fa-eye" id="eyeicon"></i>
                                    <input type="password" name="password" id="password" placeholder="Password" required="" onChange={(e) => this.setState({ password: e.target.value })} />
                                    <p id="pass_error"></p>
                                </div>

                                <div className="row">
                                    <h3>Confirm Password</h3>
                                    <i className="fa-solid fa-eye" id="c_eyeicon"></i>
                                    <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" required="" onChange={(e) => this.setState({ cpassword: e.target.value })} />
                                    <p id="message"></p>
                                </div>


                                <div className="row">
                                    <h3>Seat Type</h3>
                                    <i className="fa-solid fa-building-columns"></i>
                                    <input type="text" name="seattype" placeholder="Institute level" required="" onChange={(e) => this.setState({ seattype: e.target.value })} />
                                </div>


                                <div className="radio">
                                    <tr>
                                        <td><input type="radio" name="fy" value="FY" onChange={(e) => this.setState({ year: e.target.value })} />&nbsp; First year&nbsp;</td>
                                        <td><input type="radio" name="fy" value="DSE" onChange={(e) => this.setState({ year: e.target.value })} />&nbsp; Direct Second year&nbsp;</td>
                                    </tr>
                                </div>


                                <div className="row button">
                                    <input type="submit" value="Sign up" />
                                </div>
                                <p className="forgot-password text-right">
                                    Already registered? <a href="/login">Sign In</a>
                                </p>
                                <br></br>
                                <footer>
                                    <a href="#">www.getflytechnology.com</a>
                                </footer>

                            </form>
                        </div>
                    </div>
                    <script src="valid.js"></script>
                </div>

            </>
        )
    }
}

