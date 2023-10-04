import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";


const DoctorList = () => {
  const [doctor, setDoctor] = useState([])

 useEffect(() =>{
  fetch('http://localhost:5000/doctorlist')
  .then(res => res.json())
  .then(data => setDoctor(data))
 }, [])

  return (
    <>
    <h1 className="text-blue-500 text-3xl text-center">Meet Our Doctor</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      {
        doctor.map(doct =><DoctorCard
        key={doct._id}
        doct={doct}
        ></DoctorCard>)
      }
      </div>
    </>
  );
};

export default DoctorList;
