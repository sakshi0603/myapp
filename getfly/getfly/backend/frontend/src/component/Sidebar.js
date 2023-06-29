import axios from "axios";
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Status from "./Status";

const Sidebar = () => {
  const navigate=useNavigate()
  const logout = async () => {
    console.log("start")
    await axios.get("/logout")
    navigate("/Login");
    
    } 
    
  
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.optionList}>
      <NavLink style={styles.link} to="/Status" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-check-circle" style={styles.icon}></i>
            <span style={styles.optionText}>Status</span>
          </li>
        </NavLink>
        <NavLink style={styles.link} to="/Basic" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-book" style={styles.icon}></i>
            <span style={styles.optionText}>Basic Details</span>
          </li>
        </NavLink>
        <NavLink style={styles.link} to="/Education" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-school" style={styles.icon}></i>
            <span style={styles.optionText}>Education Details</span>
          </li>
        </NavLink>

        <NavLink style={styles.link} to="/Upload" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-upload" style={styles.icon}></i>
            <span style={styles.optionText}>Upload Documents</span>
          </li>
        </NavLink>
        
        
        <NavLink style={styles.link} className="navlink" onClick={logout}>
          <li style={styles.option}>
            <i className="fas fa-sign-out-alt" style={styles.icon}></i>
            <span style={styles.optionText}>Logout</span>
          </li>
        </NavLink>
      </ul>

    </aside>
  );
};

export default Sidebar;

const styles = {
  sidebar: {
    display: 'block',
    backgroundColor: "#f9f9f9",
    padding: "10px 45px",
  },
  optionList: {
    listStyleType: "none",
    padding: 0,
  },
  option: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
    padding: "10px 0",
  },
  icon: {
    marginRight: "30px",
    width: "10px",
  },
  optionText: {
    fontSize: "16px",
  },
  footer: {
    marginTop: "auto",
    alignSelf: "flex-end",
  },
  footerText: {
    fontSize: "12px",
    color: "#666",
    alignSelf: "flex-end",
    marginTop: "400px",
  },

  link: {
    // color:'white',
    textDecoration: 'none',
  }
}
