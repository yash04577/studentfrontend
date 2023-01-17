import React, { useEffect, useState } from 'react'
import axios from "axios"

const Card = () => {

    const [studentData, setStudentData] = useState([]);

    const getStudents = async () => {
        const result = await fetch("https://studentapi-myuu.onrender.com/getstudents");
        const test = await result.json();
        console.log(test)
        setStudentData(test);
    }

    useEffect(() => {
        getStudents();
    }, [])


    return (
        <>

            {
                studentData.map((student) => {

                    return (
                        <div className="cardContainer">
                            <div className="cardBody">
                                <table>
                                    <tr>
                                        <td>ID</td>
                                        <td>{student._id}</td>
                                    </tr>
                                    <tr>
                                        <td>First Name</td>
                                        <td>{student.firstName}</td>
                                    </tr>
                                    <tr>
                                        <td>Last Name</td>
                                        <td>{student.lastName}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{student.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Class</td>
                                        <td>{student.standard}</td>
                                    </tr>
                                    <tr>
                                        <td>Roll Number</td>
                                        <td>{student.rollnumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile Number</td>
                                        <td>{student.number}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{student.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Creation Time</td>
                                        <td>{student.createdAt}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>)
                })
            }


        </>
    )
}

export default Card