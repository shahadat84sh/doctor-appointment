import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import CheckoutCard from "./CheckoutCard";
import Swal from "sweetalert2";

const Checkout = () => {
const {user} = useContext(AuthContext)

const url = `http://localhost:5000/appoint?email=${user?.email}`;
const [bookings, setBookings] =useState([])

const handleDelete = id =>{
  const proceed = confirm('Are you sure to delete It')
  if(proceed){
    fetch(`http://localhost:5000/appoint/${id}`,{
      method:'DELETE'
    })
    .then(res=> res.json())
    .then(data =>{
      console.log(data);
      if(data.deletedCount >0){
        Swal.fire('You have deleted succesfully')
        const remaining = bookings.filter(booking => booking._id !== id)
        setBookings(remaining)
      }
    })
  }
}

const handleUpdate = id =>{
  fetch(`http://localhost:5000/appoint/${id}`, {
    method:'PATCH',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({status: 'confirm'})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.modifiedCount > 0){
      // updateStatus
      const remaining = bookings.filter(booking => booking._id !== id)
      const updated = bookings.find(booking => booking._id === id)
      updated.status = 'confirm'
      const newBooking = [updated, ...remaining]
      setBookings(newBooking)
    }
  })
}

useEffect(()=>{
    fetch(url)
    .then(res=> res.json())
    .then(data => setBookings(data))
    console.log('Booking',bookings);
},[url])

  return (
    <div className="w-3/4 mx-auto place-items-center mt-10">
        <h1 className="text-2xl text-blue-300 text-center">Your all Appoint request are here</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Edit</th>
              <th>Name</th>
              <th>Service Require</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
              </tr>
          </thead>
            {
              bookings.map(booking => <CheckoutCard 
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}>
              </CheckoutCard>)
            }
        </table>
      </div>
    </div>
  );
};

export default Checkout;
