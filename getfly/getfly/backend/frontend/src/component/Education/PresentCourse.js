import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";

function PresentCourse({presentcourse,previouscourse}) {
  const [studid, setStudid] = useState("");
  const [selectedprog, setSelectedprog] = useState("");
  const [seattype, setSeattype] = useState("");
  const [grno, setGrno] = useState("");
  const [defseat, setDefseat] = useState("");
  const [handicap, setHandicap] = useState("");

  const pres = async (e) => {
    console.log("huehue")
    e.preventDefault();
    presentcourse.current.style.display = "none";
    previouscourse.current.style.display = "block";
    await axios.post("/Education/PresentCourse", {
      studid: studid,
      selectedprog: selectedprog,
      seattype: seattype,
      grno: grno,
      defseat: defseat,
      handicap: handicap,
    });
  };

  return (
    <>
 <form onSubmit={pres}>
  <div className="fourth">
    <div className="studentid field">
      <label htmlFor="studentid">Student Id</label>
      <input
        type="number"
        name="studentid"
        required
        onChange={(e) => {
          setStudid(e.target.value);
        }}
      />
    </div>
    <div className="selected program field">
      <label htmlFor="selectedprogram">Selected Program</label>
      <select
        name="selectedprogram"
        onChange={(e) => {
          setSelectedprog(e.target.value);
        }}
        required
      >
        <option value="">--Select Program--</option>
        <option value="Computer Engineering">Computer Engineering</option>
        <option value="Information Technology">Information Technology</option>
        <option value="AIDS">AIDS</option>
        <option value="others">others</option>
      </select>
    </div>
    <div className="seattype field">
      <label htmlFor="seattype">Seat Type</label>
      <select
        name="seattype"
        onChange={(e) => {
          setSeattype(e.target.value);
        }}
        required
      >
        <option value="">--Select Seat type--</option>
        <option value="Cap seat">Cap Level Seat</option>
        <option value="Institute seat">Institute Level Seat</option>
        <option value="Donation seat">Donation Level seat</option>
      </select>
    </div>
    <div className="GR Number field">
      <label htmlFor="GRNumber">GR Number</label>
      <input
        type="text"
        name="GRNumber"
        pattern="[A-Za-z0-9\s]+"
        required
        onChange={(e) => {
          setGrno(e.target.value);
        }}
      />
    </div>
  </div>
  <div className="fourth">
    <div className="Defence status field">
      <label htmlFor="Defencestatus">Defence Status</label>
      <input
        type="text"
        name="Defencestatus"
        required
        pattern="[A-Za-z0-9\s]+"
        onChange={(e) => {
          setDefseat(e.target.value);
        }}
      />
    </div>
    <div className="physicallyhandicapped field">
      <label htmlFor="physicallyhandicapped">Physically Handicapped</label>
      <select
        name="physicallyhandicapped"
        required
        onChange={(e) => {
          setHandicap(e.target.value);
        }}
       
      >
        <option value="">--Select Option--</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  </div>
  <div className="btn">
    <button>
      <Link to="/Basic/ParentDetails" style={styles.link}>
        Go Back
      </Link>
    </button>
    <button type="submit">Next</button>
  </div>
</form>

    </>
  );
}

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
  },
};
export default PresentCourse;
