import React from "react";
import Sidebar from "./Sidebar";

import { useRef } from "react";
import "./style.css";
import { NavLink, Link } from "react-router-dom";

import PreviousCourse from "./Education/PreviousCourse"
import PresentCourse from "./Education/PresentCourse"

const Two = () => {

    const presentcourse = useRef(null);
    const previouscourse = useRef(null);

    const handlepreviouscourse = (e) => {
        e.preventDefault();
        presentcourse.current.style.display = "none";
        previouscourse.current.style.display = "block";
    };
    const handlepresentcourse = (e) => {
        e.preventDefault();
        console.log("Hello");
        presentcourse.current.style.display = "block";
        previouscourse.current.style.display = "none";
    };
    return (
        <div className="flex">
            <Sidebar />
            <div>
                <div style={styles.mainContent}>
                    <div style={styles.greeting}>
                        <h2>Education Details</h2>
                    </div>
                    <hr style={styles.horizontalLine} />
                </div>
                <ul style={styles.ul}>
                    <NavLink
                        to="/Education/PresentCourse"
                        style={styles.li}
                        onClick={(e) => handlepresentcourse(e)}
                    >
                        PresentCourse
                    </NavLink>

                    <NavLink
                        to="/Education/PreviousCourse"
                        style={styles.li}
                        onClick={(e) => handlepreviouscourse(e)}
                    >
                        PreviousCourse
                    </NavLink>
                </ul>
                <div>

                    <div ref={presentcourse} className="first">
                        <PresentCourse presentcourse={presentcourse} previouscourse={previouscourse}/>
                    </div>

                    <div ref={previouscourse} style={{ display: "none" }}>
                        <PreviousCourse presentcourse={presentcourse} previouscourse={previouscourse} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Two;
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
        fontSize: "20px",
        color:"#0000EE",
    },
};
