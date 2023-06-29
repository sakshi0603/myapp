import React, { useState } from "react";
import "./style.css";
import axios, { Axios } from "axios";


function Address({personal,parents,address}) {
  const [flatno, setFlatno] = useState("");
  const [bldgno, setBldgno] = useState("");
  const [bldg, setBldg] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const add = async (e) => {
    e.preventDefault();
    personal.current.style.display = "none";
    address.current.style.display = "none";
    parents.current.style.display = "block";
    await axios.post("/Basic/Address", {
      flatno: flatno,
      bldgno: bldgno,
      bldg: bldg,
      area: area,
      city: city,
      state: state,
      pincode: pincode,
    });
  };
  return (
    <>
     <div className="flex">
  <body style={styles.address}>
    <form onSubmit={add}>
      <div className="second">
        <div className="flat field">
          <label htmlFor="flat">Flat No</label>
          <input
            type="text"
            name="flat"
            required
            pattern="[A-Za-z0-9\s]+"
            onChange={(e) => {
              setFlatno(e.target.value);
            }}
          />
        </div>
        <div className="buildingNo field">
          <label htmlFor="buildingNo">Building No</label>
          <input
            type="text"
            name="buildingNo"
            required
            pattern="[A-Za-z0-9\s]+"
            onChange={(e) => {
              setBldgno(e.target.value);
            }}
          />
        </div>
        <div className="buildingName field">
          <label htmlFor="buildingName">Building Name</label>
          <input
            type="text"
            name="buildingName"
            required
            pattern="[A-Za-z\s]+"
            onChange={(e) => {
              setBldg(e.target.value);
            }}
          />
        </div>
        <div className="area field">
          <label htmlFor="area">Area Name</label>
          <input
            type="text"
            name="area"
            required
            pattern="[A-Za-z\s]+"
            onChange={(e) => {
              setArea(e.target.value);
            }}
          />
        </div>
        <div className="city field">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            required
            pattern="[A-Za-z\s]+"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="first">
        <div className="states field">
          <label htmlFor="states">Select State</label>
          <select
            name="states"
            required
            onChange={(e) => {
              setState(e.target.value);
            }}
          >
            <option value="">-- Select State --</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra and Nagar Haveli and Daman and Diu">
                  Dadra and Nagar Haveli and Daman and Diu
                </option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
          </select>
        </div>
        <div className="pinCode field">
          <label htmlFor="pinCode">Pin Code</label>
          <input
            type="text"
            name="pinCode"
            required
            pattern="[0-9]+"
            onChange={(e) => {
              setPincode(e.target.value);
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
  </body>
</div>

    </>
  );
}

const styles = {
  address: {
    flex: 1,
    padding: "20px",
    width: "175vh",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  Parent: {
    flex: 1,
    padding: "20px",
    width: "175vh",
  },
};
export default Address;
