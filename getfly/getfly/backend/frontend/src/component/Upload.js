import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./upload.css";
const user = { email: '',
password: '',
cpassword: '',
seattype: '',
year: '',
studid:''
 };

const Upload = () => {
  const handleClick = async () => {
    console.log("workning");
    alert("Your details of the current page have been saved. Please Logout ");
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post("/upload", user, config);
    console.log(data);
  };

  return (
    <>
     <div>
  <Navbar />
</div>
<div className="flex">
  <Sidebar />
  <div>
    <div style={styles.mainContent}>
      <div style={styles.greeting}>
        <h2>Upload Documents</h2>
      </div>
      <hr style={styles.horizontalLine} />
    </div>
    <form onSubmit={handleClick} method="post" encType="multipart/form-data">
      <div className="box">
        <div>
          <p>Profile Photo</p>
          <br />
          <input type="file" name="profile" style={styles.input} required />
        </div>
        <div>
          <p>Signature</p>
          <br />
          <input type="file" name="signature" style={styles.input} required />
        </div>
      </div>
      <hr />
      <div className="box">
        <div>
          <p>SSC Marksheet</p>
          <br />
          <input type="file" name="sscmarksheet" style={styles.input} required />
        </div>
        <div>
          <p>HSC Marksheet</p>
          <br />
          <input type="file" name="hscmarksheet" style={styles.input} required />
        </div>
        <div>
          <p>MHTCET Score Card</p>
          <br />
          <input
            type="file"
            name="mhtcetmarksheet"
            style={styles.input}
            required
          />
        </div>
        <div>
          <p>JEE Score Card</p>
          <br />
          <input type="file" name="jeescorecard" style={styles.input} required />
        </div>
        <div>
          <p>CAP Allotment</p>
          <br />
          <input type="file" name="capallotment" style={styles.input} required />
        </div>
        <div>
          <p>FC Center Verification</p>
          <br />
          <input
            type="file"
            name="fccenterverification"
            style={styles.input}
            required
          />
        </div>
      </div>
      <hr />
      <div className="box">
        <div>
          <p>Adhaar Card</p>
          <br />
          <input type="file" name="aadharcard" style={styles.input} required />
        </div>
        <div>
          <p>Ration Card</p>
          <br />
          <input type="file" name="rationcard" style={styles.input} required />
        </div>
        <div>
          <p>Bank Passbook</p>
          <br />
          <input type="file" name="bankpassbook" style={styles.input} required />
        </div>
        <div>
          <p>Income Certificate</p>
          <br />
          <input
            type="file"
            name="incomecertificate"
            style={styles.input}
            required
          />
        </div>
        <div>
          <p>Caste Certififcate</p>
          <br />
          <input
            type="file"
            name="castecertificate"
            style={styles.input}
            required
          />
        </div>
        <div>
          <p>Caste Validation</p>
          <br />
          <input
            type="file"
            name="castevalidation"
            style={styles.input}
            required
          />
        </div>
        <div>
          <p>Domicile Certificate</p>
          <br />
          <input
            type="file"
            name="domicilecertificate"
            style={styles.input}
            required
          />
        </div>
      </div>
      <hr />
      <div className="box">
        <div>
          <p>Fee Receipt</p>
          <br />
          <input type="file" name="feereceipt" style={styles.input} required />
        </div>
        <div>
          <p>College Admission Letter</p>
          <br />
          <input
            type="file"
            name="collegeadmissionletter"
            style={styles.input}
            required
          />
        </div>
      </div>

      <div className="btn">
        <button>
          <Link to="/Education/PreviousCourse" style={styles.link}>
            Go Back
          </Link>
        </button>
        <button variant="primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

    </>
  );
};

export default Upload;

const styles = {
  mainContent: {
    flex: 1,
    padding: "20px",
    width: "175vh",
  },
  greeting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  dt: {
    display: "flex",
    flexDirection: "column",
    margin: "0 5px",
  },
  para: {
    margin: "2px 0",
  },
  horizontalLine: {
    border: "none",
    borderTop: "1px solid #ccc",
    margin: "20px 0",
  },
  ul: {
    display: "flex",
    justifyContent: "space-around",
    background: "#f4f4f4",
    height: "45px",
  },
  li: {
    textDecoration: "none",
    fontSize: "30px",
  },
  input: {
    height: "21px",
    width: "87px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};
