import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react"; // search http://localhost:3000/invitation/43243242 in the url of google
import ManageDatabaseRequests from "../db/actions";
import Top from "../components/Top";
import Main from "../components/Main";
import Register from "../components/Register";

const Invitation = () => {
  const { key } = useParams();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [type, setType] = useState("");
  const [inviteId, setInviteId] = useState("");
  useEffect(() => {
    ManageDatabaseRequests.GetInviteInfo(key).then((result) => {
      
      console.log(result.data);
      setInviteId(result.data.inviteId)
      setName(result.data.name);
      setDate(result.data.date);
      setLocation(result.data.location);
      setOtherDetails(result.data.otherDetails);
      setType(result.data.type);
    });
  }, [key]);

  return (
    <div>
      {/* <h1>{name}</h1>
      <h1>{date}</h1>
      <h1>{location}</h1>
      <h1>{otherDetails}</h1> */}
      <Top type={type}/>
      <Main name={name} date={date} location={location} otherDetails={otherDetails} />
      <Register inviteId={inviteId} />
    </div>
  );
};

export default Invitation;
