import React from "react";
import { FaAddressCard } from 'react-icons/fa';

const Location = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="flex flex-row justify-end p-5">
          <div>
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
          </div>
          <div className="card-actions justify-end">
            <FaAddressCard/>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="flex flex-row justify-end p-5">
          <div>
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
          </div>
          <div className="card-actions justify-end">
            <FaAddressCard/>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="flex flex-row justify-end p-5">
          <div>
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
          </div>
          <div className="card-actions justify-end">
            <FaAddressCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
