import React from "react";

const CheckoutCard = ({ booking, handleDelete, handleUpdate}) => {
  const {_id, name, email, service, date, status } = booking;
  
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
        <td>{name}</td>
        <td>{service}</td>
        <td>{email}</td>
        <td>{date}</td>
        <td>
          {
            status === 'confirm'?<span className="font-bold text-primary">Confirmed</span>:
            <button onClick={()=> handleUpdate(_id)}>Pending</button>}
        </td>
      </tr>
    </tbody>
  );
};

export default CheckoutCard;
