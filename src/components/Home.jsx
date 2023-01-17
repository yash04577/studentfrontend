import React from 'react'

const Home = () => {
  return (
    <>
      <div className="wrapperHome">
        <div className="homeContainer">

          <div className="aboutContainer">
            <h1>Hii I am Yash Prajapati</h1>
            <h2>A MERN DEVELOPER</h2>

            <h3 style={{marginTop:"50px"}}>Features of this Project</h3>
            <h4>Create Studen</h4>
            <h4>Update Studen</h4>
            <h4>Delete Studen</h4>
            <h4>See Studen</h4>

            <h1 style={{marginTop:"50px"}}>Instruction</h1>
            <h4>On the first Time Fetching data may take some time as it is hosted on a free server</h4>
            <h4>To use this website use Navlinks</h4>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Home