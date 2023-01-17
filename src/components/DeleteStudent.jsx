import React, { useState } from 'react'

const DeleteStudent = () => {

    const [studentID, setid] = useState('');

    const changeHandler = (e) =>{
        setid(e.target.value);
    }

    const deleteStudent = async (e) =>{
        e.preventDefault();

        
        const id = studentID;

        if(!studentID){
            window.alert("please fill all details");
        }

        else{
            const response = await fetch("https://studentapi-myuu.onrender.com/deletestudent", {
                method: "DELETE",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    id:id
                })
            })
    
            const res = await response.json();
            console.log(res);
            window.alert(res);
        }

       
    }

    return (
        <div className="wrapperDeleteStudent">
            <div className="deleteFormContainer">
                <form method="post" className='deletionForm'>
                    <label htmlFor="_id">Student ID</label>
                    <input type="text" name="_id" id="" value={studentID} onChange={changeHandler} placeholder="Enter Student ID to Delete Student" />
                    <button type="submit" onClick={deleteStudent} className={"deleteBtn"}>Delete Student</button>
                </form>
            </div>
        </div>
    )
}

export default DeleteStudent