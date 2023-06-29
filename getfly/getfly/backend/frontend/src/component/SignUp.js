import React, { useState } from "react";
import img from "./image/logo.png";
import "./login.css";
import axios, { Axios } from "axios";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [seattype, setSeattype] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();

  const reg = async (e) => {
    e.preventDefault();
    const {data}=await axios.post("/SignUp", {
      
      email: email,
      password: password,
      cpassword: cpassword,
      seattype: seattype,
      year: year,
    });
    console.log(data);
    if(data.success===true)
    navigate("/Login");
    else
    alert("Passwords Does not match.")
  };

  const uncoverS = async () => {
    let eyeicon = document.getElementById("eyeicon");
    let c_eyeicon = document.getElementById("c_eyeicon");
    let pass = document.getElementById("password");
    let cpass = document.getElementById("cpassword");

    eyeicon.onclick = function () {
      if (pass.type == "password") {
        pass.type = "text";
      } else {
        pass.type = "password";
      }
    };
    c_eyeicon.onclick = function () {
      if (cpass.type == "password") {
        cpass.type = "text";
      } else {
        cpass.type = "password";
      }
    };
  };

  return (
    <>
      <div className="body">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="container">
          <div className="wrapper">
            <div className="title">
              <h3>Signup</h3>
            </div>
            <p>Welcome to GetFly Technology, Please login to your account</p>
            <form onSubmit={reg}>
              <div className="row">
                <h3>College Id</h3>
                <i className="fa-solid fa-user" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="id@pvppcoe.ac.in"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <p id="email_error"></p>
              </div>

              <div className="row">
                <h3>Password</h3>
                <i
                  className="fa-solid fa-eye"
                  id="eyeicon"
                  onClick={uncoverS}
                ></i>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <p id="pass_error"></p>
              </div>

              <div className="row">
                <h3>Confirm Password</h3>
                <i
                  className="fa-solid fa-eye"
                  id="c_eyeicon"
                  onClick={uncoverS}
                ></i>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm Password"
                  required
                  onChange={(e) => {
                    setCPassword(e.target.value);
                  }}
                />
                <p id="message"></p>
              </div>

              <div className="row">
  <h3 style={{ marginBottom: 0 }}>Seat Type</h3>
  <i
    className="fa-solid fa-building-columns"
    style={{
      position: 'absolute',
      width: '60px',
      height: '110%',
      color: '#fff',
      fontSize: '18px',
      background: '#00A1D9',
      border: '1px solid #00A1D9',
      borderRadius: '5px 0 0 5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  ></i>
  <select
    name="seattype"
    required
    onChange={(e) => {
      setSeattype(e.target.value);
    }}
    style={{
      marginLeft: '55px',
      paddingLeft: '10px',
      height: '90%',
      width: '90%',
      outline: 'none',
      borderRadius: '5px',
      border: '1px solid white',
      fontSize: '16px',
      transition: 'all 0.3s ease',
    }}
    onFocus={(e) => {
      e.target.style.borderColor = '#00A1D9';
      e.target.style.boxShadow = 'inset 0px 0px 2px 2px rgba(26, 188, 156, 0.25)';
    }}
    onBlur={(e) => {
      e.target.style.borderColor = 'white';
      e.target.style.boxShadow = 'none';
    }}
  >
    <option value="">Select seat type</option>
    <option value="Institute level">Institute level</option>
    <option value="Department level">Department level</option>
    <option value="CAP">CAP</option>
    <option value="Other">Other</option>
    {/* Add more options as needed */}
  </select>
</div>





              <div className="radio">
                <tr>
                  <td>
                    <input
                      type="radio"
                      name="fy"
                      value="FY"
                      required
                      onChange={(e) => {
                        setYear(e.target.value);
                      }}
                    />
                    &nbsp; First year&nbsp;
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fy"
                      value="DSE"
                      onChange={(e) => {
                        setYear(e.target.value);
                      }}
                    />
                    &nbsp; Direct Second year&nbsp;
                  </td>
                </tr>
              </div>
              {/* 
              <div className="row button">
                <input type="submit" value="Sign up" />
              </div> */}
              <div className="row button">
                <button type="submit">Submit</button>
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
      </div>
    </>
  );
}

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default SignUp;
