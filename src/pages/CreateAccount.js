import React, { useRef } from "react";
import ManageDatabaseRequests from "../db/actions";
import { useNavigate } from "react-router-dom";
import Lottie from 'lottie-react';
import animationData from '../assets/createAccount.json';

const CreateAccount = () => {
  const nameRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row min-h-[80vh] items-center justify-center mb-[150px] md:mb-[0px]">
      <Lottie animationData={animationData} className="w-[80%] mb-[20px]" />
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl font-bold mb-5">יצירת חשבון</h1>
        <input
          ref={nameRef}
          placeholder="שם"
          dir="rtl"
          className="w-[60%] md:w-[50%] p-3 outline-none border-[1px] bg-gray-300 rounded-full focus:border-gray-400 transition-all"
        />
        <input
          ref={passRef}
          placeholder="סיסמה"
          dir="rtl"
          className="w-[60%] md:w-[50%] p-3 outline-none border-[1px] bg-gray-300 rounded-full focus:border-gray-400 transition-all m-2"
        />
        <button
          className="bg-[#f3603c] w-[50%] md:w-[40%] p-3 m-2 rounded-full text-white lg:hover:shadow-lg lg:hover:shadow-[#c4acac] lg:hover:scale-110 transition-all"
          onClick={() => {
            ManageDatabaseRequests.CheckUserExistanceByNameAndPassword(nameRef.current.value, passRef.current.value).then(result => {
              if(typeof(result) === 'object'){
                alert('שם המשתמש תפוס')
              }else{  
                ManageDatabaseRequests.AddAccountToDatabase(
                  nameRef.current.value,
                  passRef.current.value
                ).then((_id) => {
                  navigate('/home')
                });
              }
            })
          }}
        >
          צור חשבון
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
