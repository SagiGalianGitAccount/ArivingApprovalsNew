import React, { useEffect } from "react";

const GuestCard = ({ name, phone, count, guestId, delMe, date }) => {
  return (
    <div className="w-[90%] md:w-[60%] flex flex-col justify-between items-center shadow-lg m-2">
      <div className="">
        <h1>{date}</h1>
      </div>

      <div className="w-[90%] md:w-[60%] flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <button
            className="m-2 text-[rgb(255,0,0)] font-black font-mono text-lg"
            onClick={() => {
              delMe(guestId);
            }}
          >
            מחק
          </button>
          <button className="m-2 text-[#f3603c] font-black font-mono text-lg">
            ערוך
          </button>
        </div>
        <div className="flex flex-row justify-center items-center text-end">
          <h1 className="m-2">{count}</h1>
        </div>
        <div className="flex flex-row justify-center items-center text-end">
          <h1 className="m-2 font-medium">{phone}</h1>
        </div>
        <div className="flex flex-row justify-center items-center text-end">
          <h1 className="m-2 text-xl font-bold">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default GuestCard;
