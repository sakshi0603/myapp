import React, { useState } from "react";
import "./style.css";
import axios from "axios";

// const Personal = () => {
function Personal({personal,parents,address}) {
  const [fname, setFname] = useState("");
  const [dob, setDob] = useState("");
  const [pob, setPob] = useState("");
  const [gender, setGender] = useState("");
  const [nation, setNation] = useState("");
  const [religion, setReligion] = useState("");
  const [caste, setCaste] = useState("");
  const [scaste, setSCaste] = useState("");
  const [mini, setMini] = useState("");
  const [phone, setPhone] = useState("");
  const [lando, setLando] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [email, setEmail] = useState("");
  const [pgphone, setPgPhone] = useState("");
  const [pgemail, setPgEmail] = useState("");
  const [marital, setMarital] = useState("");
  const [baccno, setBaccno] = useState("");
  const [bname, setBname] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [lastcolatt, setLastcolatt] = useState("");

  const pers = async (e) => {
    e.preventDefault();
    personal.current.style.display = "none";
    address.current.style.display = "block";
    parents.current.style.display = "none";
    await axios.post("/Basic/Personal", {
      fname: fname,
      dob: dob,
      pob: pob,
      gender: gender,
      nation: nation,
      religion: religion,
      caste: caste,
      scaste: scaste,
      mini: mini,
      phone: phone,
      lando: lando,
      add1: add1,
      add2: add2,
      email: email,
      pgphone: pgphone,
      pgemail: pgemail,
      marital: marital,
      baccno: baccno,
      bname: bname,
      aadhar: aadhar,
      lastcolatt: lastcolatt,
    });
  };

  return (
    <div>
  <div className="flex">
    <div>
      <form onSubmit={pers}>
        <div className="first">
          <div className="fullName field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fname"
              pattern="[A-Za-z\s]+"
              required
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
          </div>
          <div className="dob field">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              id="dob"
              required
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
          </div>
          <div className="pob field">
            <label htmlFor="pob">Place of Birth</label>
            <input
              type="text"
              name="pob"
              id="pob"
              required
              onChange={(e) => {
                setPob(e.target.value);
              }}
            />
          </div>
          <div className="gender field">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              required
            >
              <option value="">--Select Gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
        <div className="first">
          <div className="nation field">
            <label htmlFor="nation">Nationality</label>
            <input
              type="text"
              name="nation"
              pattern="[A-Za-z\s]+"
              required
              onChange={(e) => {
                setNation(e.target.value);
              }}
            />
          </div>
          <div className="religion field">
            <label htmlFor="religion">Religion</label>
            <input
              type="text"
              name="religion"
              pattern="[A-Za-z\s]+"
              required
              onChange={(e) => {
                setReligion(e.target.value);
              }}
            />
          </div>
          <div className="caste field">
            <label htmlFor="caste">Caste</label>
            <input
              type="text"
              name="caste"
              pattern="[A-Za-z\s]+"
              required
              onChange={(e) => {
                setCaste(e.target.value);
              }}
            />
          </div>
          <div className="subCast field">
            <label htmlFor="subCaste">Sub Caste</label>
            <input
              type="text"
              name="subCaste"
              pattern="[A-Za-z\s]+"
              required
              onChange={(e) => {
                setSCaste(e.target.value);
              }}
            />
          </div>
          <div className="minority field">
            <label htmlFor="minority">Minority</label>
            <input
              type="text"
              name="minority"
              pattern="[A-Za-z\s]+"
              required
              onChange={(e) => {
                setMini(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="third">
          <div className="phoneNo field">
            <label htmlFor="phoneNo">Phone No</label>
            <input
              type="text"
              name="phoneNo"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="landNo field">
            <label htmlFor="landNo">Landline No</label>
            <input
              type="text"
              name="landNo"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setLando(e.target.value);
              }}
            />
          </div>
          <div className="add1 field">
            <label htmlFor="add1">Address Line 1</label>
            <input
              type="text"
              name="add1"
              pattern="[A-Za-z\s]+"
              required
              onChange={(e) => {
                setAdd1(e.target.value);
              }}
            />
          </div>
          <div className="add2 field">
            <label htmlFor="add2">Address Line 2</label>
            <input
              type="text"
              name="add2"
              pattern="[A-Za-z\s]+"
              required
              onChange={(e) => {
                setAdd2(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="fourth">
          <div className="sEmail field">
            <label htmlFor="sEmail">Student Email Id</label>
            <input
              type="email"
              name="sEmail"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="pNo field">
            <label htmlFor="pNo">Parent/Guardian Mobile No</label>
            <input
              type="text"
              name="pNo"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setPgPhone(e.target.value);
              }}
            />
          </div>
          <div className="pEmail field">
            <label htmlFor="pEmail">Parent/Guardian Email</label>
            <input
              type="email"
              name="pEmail"
              required
              onChange={(e) => {
                setPgEmail(e.target.value);
              }}
            />
          </div>
          <div className="martial field">
            <label htmlFor="martial">Marital Status</label>
            <select
              name="martial"
              onChange={(e) => {
                setMarital(e.target.value);
              }}
              required
            >
              <option value="">--Select Marital Status--</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
          </div>
        </div>
        <div className="fifth">
          <div className="bankAccNo field">
            <label htmlFor="bankAccNo">Bank Account No</label>
            <input
              type="text"
              name="bankAccNo"
              pattern="[A-Za-z0-9\s]+"
              required
              onChange={(e) => {
                setBaccno(e.target.value);
              }}
            />
          </div>
          <div className="bankName field">
            <label htmlFor="bankName">Bank Name</label>
            <input
              type="text"
              name="bankName"
              pattern="[A-Za-z0-9\s]+"
              required
              onChange={(e) => {
                setBname(e.target.value);
              }}
            />
          </div>
          <div className="aadharNo field">
            <label htmlFor="aadharNo">Aadhar No</label>
            <input
              type="text"
              name="aadharNo"
              pattern="[0-9]+"
              required
              onChange={(e) => {
                setAadhar(e.target.value);
              }}
            />
          </div>
          <div className="lastcol field">
            <label htmlFor="lastcol">Last College Attended</label>
            <input
              type="text"
              name="lastcol"
              required
              pattern="[A-Za-z\s]+"
              onChange={(e) => {
                setLastcolatt(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="btn">
          <button type="submit" >
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
}

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Personal;
