import React from 'react'
import Navbar from './Navbar'
import Button from './Button'


const Section = () => {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid bg-dark text-white px-5 pt-5 pb-5">
        <div className="row">
          <div className="col-6">
            <h1 className="display-2 font-weight-bold">Say Hello to ReactJS</h1>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-3">
            <h3>You will learn a Frontend framework from scratch, to become a Ninja Developer.</h3>
          </div>
        </div>
        <Button text="Awesome!"/>
      </div>
    </div>
  )
}

export default Section
