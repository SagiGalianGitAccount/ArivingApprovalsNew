import React, { useEffect, useState, useContext } from "react";
import ManageDatabaseRequests from "../db/actions";
import GuestCard from "../components/GuestCard.js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Loader from "../components/Loader";

const Guests = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);

  const deleteGuest = (guestId) => {
    setGuests((curr) => curr.filter((item) => item.guestId !== guestId));
    ManageDatabaseRequests.DeleteGuest(user.inviteId, guestId).then(
      (result) => {
        console.log(result);
      }
    );
  };

  useEffect(() => {
    if (!user.logged){
      navigate('/login')
    }
    setLoading(true)
    ManageDatabaseRequests.GetGuests(user._id).then((result) => {
      setLoading(false)
      console.log(result.data);
      setGuests(result.data.guests);
    }).catch(() => {
      setLoading(false);
      alert("שגיאה, נא רענן את הדף")
    })
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center">
        <button
          className="m-2"
          onClick={() => {
            navigate("/home");
          }}
        >
          חזור לעמוד הראשי
        </button>
        <h1 className="font-medium">מספר אישורים: {guests.length}</h1>
      </div>
      {guests.map((item) => (
        <GuestCard
          key={item.guestId}
          name={item.guestName}
          phone={item.guestPhone}
          count={item.guestCount}
          guestId={item.guestId}
          delMe={deleteGuest}
          date={item.approvalDate}
        />
      ))}
      {loading && <Loader />}
      {guests.length === 0 && <h1 className="text-xl font-bold mt-5">אף אורח לא אישר הגעה עדיין</h1>}
    </div>
  );
};

export default Guests;
