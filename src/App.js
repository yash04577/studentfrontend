import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreateStudent from "./components/CreateStudent";
import DeleteStudent from "./components/DeleteStudent";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ShowStudents from "./components/ShowStudents";
import UpdateSudent from "./components/UpdateSudent";

function App() {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/createstudent" element={<CreateStudent></CreateStudent>} />
            <Route path="/deletestudent" element={<DeleteStudent></DeleteStudent>} />
            <Route path="/updatestudent" element={<UpdateSudent></UpdateSudent>} />
            <Route path="/getstudents" element={<ShowStudents></ShowStudents>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
