import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-5xl ">
        We Offer Computerized Laboratory Test
      </h1>
      <p className="text-center text-lg">
        At Pathology.Lab we have pleasure in providing with very impressive
        laboratoy <br /> services. We serve our customers through three main
        service pillars.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <div className="card w-96 bg-base-100 shadow-xl my-7">
        <div className="card-body items-center text-center">
          <h2 className="card-title  hover:text-red-400">Pathology</h2>
          <ul className="list-disc items-start text-start">
            <li>Clinical Chemistry</li>
            <li>Clinical Microbiology</li>
            <li>Cytogenetics</li>
            <li>Surgical Pathology</li>
            <li>Haematology</li>
          </ul>
          <Link className="text-xl text-red-500 hover:underline hover:text-black">View All set</Link>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl my-7">
        <div className="card-body items-center text-center">
          <h2 className="card-title  hover:text-red-400">Rediology</h2>
          <ul className="list-disc items-start text-start">
            <li>Clinical Chemistry</li>
            <li>Clinical Microbiology</li>
            <li>Cytogenetics</li>
            <li>Surgical Pathology</li>
            <li>Haematology</li>
          </ul>
          <Link className="text-xl text-red-500 hover:underline hover:text-black">View All set</Link>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl my-7">
        <div className="card-body items-center text-center">
          <h2 className="card-title hover:text-red-400">Clinical Trials</h2>
          <ul className="list-disc items-start text-start">
            <li>Clinical Chemistry</li>
            <li>Clinical Microbiology</li>
            <li>Cytogenetics</li>
            <li>Surgical Pathology</li>
            <li>Haematology</li>
          </ul>
          <Link className="text-xl text-red-500 hover:underline hover:text-black">View All set</Link>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Offer;
