import React, { useState } from 'react'

const UpdateSudent = () => {




    const [student, setStudent] = useState({ firstName: "", lastName: "", email: "", standard: "", rollnumber: "", number: "", address: "", id: "" });

    const updateStudent = async (e) => {
        e.preventDefault();
        console.log("clicked")

        const { firstName, lastName, email, standard, rollnumber, number, address, id } = student;

        if (!firstName || !lastName || !email || !standard || !rollnumber || !number || !address || !id) {
            window.alert("please fill all details")
        }

        else {

            const response = await fetch("https://studentapi-myuu.onrender.com/updatestudent", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    standard: standard,
                    rollnumber: rollnumber,
                    number: number,
                    address: address
                })

            })
            const res = await response.json();
            console.log(res);
            window.alert(res);

        }


    }

    let Name;
    let val;

    const handleInputs = (e) => {
        // console.log(e);
        Name = e.target.name;
        val = e.target.value;
        setStudent({ ...student, [Name]: val });
        // console.log(student)

        // console.log("name ", Name);
        // console.log("val ", val)

    }




    return (
        <>
            <div className="wrapperUpdateStudent">
                <div className="updateFormContainer">
                    <form method='PATCH' className='updateForm'>
                        <table className='updateTable'>
                            <tr>
                                <td>Student ID</td>
                                <td><input type="text" name='id' value={student.id} onChange={handleInputs} placeholder="Enter Student ID to Delete Student"/></td>
                            </tr>
                            <tr>
                                <td>First Name</td>
                                <td><input type="text" name='firstName' value={student.firstName} onChange={handleInputs} placeholder="Enter Student First Name"/></td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td><input type="text" name='lastName' value={student.lastName} onChange={handleInputs} placeholder="Enter Student Last Name"/></td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td><input type="text" name='email' value={student.email} onChange={handleInputs} placeholder="Enter Student Email ID"/></td>
                            </tr>
                            <tr>
                                <td>Class</td>
                                <td><input type="text" name='standard' value={student.standard} onChange={handleInputs} placeholder="Enter Student Class"/></td>
                            </tr>
                            <tr>
                                <td>Roll Number</td>
                                <td><input type="text" name='rollnumber' value={student.rollnumber} onChange={handleInputs} placeholder="Enter Student Roll Number"/></td>
                            </tr>
                            <tr>
                                <td>Mobile Number</td>
                                <td><input type="text" name='number' value={student.number} onChange={handleInputs} placeholder="Enter Student Mobile Number"/></td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td><input type="text" name='address' value={student.address} onChange={handleInputs} placeholder="Enter Student Address"/></td>
                            </tr>
                            {/* <tr>
                                <td>Creation Time</td>
                                <td><input type="text" /></td>
                            </tr> */}
                        </table>

                        <button type="submit" onClick={updateStudent} className={"updateBtn"}>Update Student</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default UpdateSudent