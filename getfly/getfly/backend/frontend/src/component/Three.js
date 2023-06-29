import React from "react";
import Sidebar from "./Sidebar";

import { useRef } from "react";
import "./style.css";
import { NavLink, Link } from "react-router-dom";
import Personal from "./Basic/Personal"
import Address from "./Basic/Address"
import ParentDetails from "./Basic/ParentDetails"

const Three = () => {
  const personal = useRef(null);
  const parents = useRef(null);
  const address = useRef(null);
  const handleparents = (e) => {
    e.preventDefault();
    console.log("parents")
    personal.current.style.display = "none";
    address.current.style.display = "none";
    parents.current.style.display = "block";
  };
  const handleAddress = (e) => {
    e.preventDefault();
    console.log("addr");
    personal.current.style.display = "none";
    address.current.style.display = "block";
    parents.current.style.display = "none";
  };
  const handlepersonal = (e) => {
    e.preventDefault();
    console.log("Hello");
    personal.current.style.display = "block";
    address.current.style.display = "none";
    parents.current.style.display = "none";
  };
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <div style={styles.mainContent}>
          <div style={styles.greeting}>
            <h2>Basic Details</h2>
          </div>
          <hr style={styles.horizontalLine} />
        </div>
        <ul style={styles.ul}>
          <NavLink
            to="/basic/personal"
            style={styles.li}
            onClick={(e) => handlepersonal(e)}
          >
            Personal
          </NavLink>

          <NavLink
            to="/basic/address"
            style={styles.li}
            onClick={(e) => handleAddress(e)}
          >
            Address
          </NavLink>

          <NavLink
            to="/basic/parentDetails"
            style={styles.li}
            onClick={(e) => handleparents(e)}
          >
            Parent Details
          </NavLink>
        </ul>
        <div>

          <div ref={personal} className="first">
            <Personal parents={parents} address={address} personal={personal} />
          </div>

          <div ref={address} style={{ display: "none" }}>
            <Address  parents={parents} address={address} personal={personal}  />
          </div>
          <div ref={parents} style={{ display: "none" }}>
            <ParentDetails  parents={parents} address={address} personal={personal}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;
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
    color: "black",
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
    margin: "10px 0",
  },
  ul: {
    display: "flex",
    justifyContent: "space-around",
    background: "#f4f4f4",
    height: "35px",
  },
  li: {
    textDecoration: "none",
    fontSize: "25px",
    color:"#0000EE",
  },
};
