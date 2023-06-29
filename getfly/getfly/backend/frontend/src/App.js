import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Personal from "./component/Basic/Personal";
import ParentDetails from "./component/Basic/ParentDetails";
import Address from "./component/Basic/Address";
import Education from "./component/Education";
import PresentCourse from "./component/Education/PresentCourse";
import PreviousCourse from "./component/Education/PreviousCourse";
import Upload from "./component/Upload";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Basic from "./component/Basic";
import Status from "./component/Status";
import React from "react";
import ReactDOM from "react-dom";
import Three from "./component/Three";

function App() {
  return (
    <>
      <BrowserRouter>
        <switch>
          <div className="login">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<SignUp />} />
            </Routes>
          </div>
          <div className="containerlog">

            <div className="Content" style={style.main}>

              <div>
                <Routes>
                <Route path="/Status" element={<Status/>} />
                  <Route path="/basic" element={<Basic />}>
                    <Route path="/basic/personal" element={<Personal />} />
                    <Route path="/basic/address" element={<Address />} />
                    <Route
                      path="/basic/parentDetails"
                      element={<ParentDetails />}
                    />
                  </Route>
                  <Route path="/education" element={<Education />}>
                    <Route
                      path="/education/presentCourse"
                      element={<PresentCourse />}
                    />
                    <Route
                      path="/education/previousCourse"
                      element={<PreviousCourse />} />
                  </Route>
                  <Route path="/upload" element={<Upload />} />
                  
                </Routes>
               
              </div>
            </div>
          </div>
        </switch>
      </BrowserRouter>
    </>
  );
}

const style = {
  main: {
    display: "flex",
  },
  nav: {
    display: "flex",
    verticalAlign: "baseline",
  },
};
export default App;
