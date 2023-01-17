import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
                <Link to={"/getstudents"}>Show Students</Link>
                <Link to={"/createstudent"}>Create Student</Link>
                <Link to={"/updatestudent"}>Update Student</Link>
                <Link to={"/deletestudent"}>Delete Student</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar