import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Booking = () => {

  const {user} = useContext(AuthContext)
    const handleAppoint = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const service = form.service.value;
        const name = form.name.value;
        const date = form.date.value;
        const appoint = {name,email,date,service}
        fetch('http://localhost:5000/appoint',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(appoint)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            console.log(data);
        })
        console.log(email, service,name, date);
        form.reset()
    }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-row w-3/4">
      <h1 className="text-5xl text-blue-500 text-center place-items-center">Doctor Appointment Details here</h1>
      <form onSubmit={handleAppoint}>
        <div className="card w-full flex flex-row shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                type="text"
                name="service"
                placeholder="service"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="input input-bordered"
              />
            </div>
          </div>  
        </div>
        <input className="btn-primary w-full btn" type="submit" value="Book Appointment" />
        </form>
      </div>
    </div>
  );
};

export default Booking;
