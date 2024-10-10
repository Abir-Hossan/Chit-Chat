import React from "react";
import RegistrationImg from "../assets/registration.png";
import { LiaHomeSolid } from "react-icons/lia";
import { BiMessageRoundedDots } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="h-screen px-8 py-9 box-border">
      <div className="w-[168px] h-full bg-primary rounded-[20px] text-center">
        <div className=" pt-9 mx-auto">
          <img
            className=" w-[100px] h-[100px] inline-block rounded-full"
            src={RegistrationImg}
            alt="RegistrationImg"
          />
        </div>
        <div className="w-full h-[88px] relative mt-16">
          <div className="w-[150px] h-[88px] ml-auto bg-white relative rounded-s-[25px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px]"></div>
          <LiaHomeSolid className="w-full text-primary text-[50px] absolute top-2/4 translate-y-[-50%]" />
        </div>
        <div className="w-full h-[88px] relative mt-12">
          <div className=" hidden w-[150px] h-[88px] ml-auto bg-white relative rounded-s-[25px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px]"></div>
          <BiMessageRoundedDots className="w-full text-[#BAD1FF] text-[50px] absolute top-2/4 translate-y-[-50%]" />
        </div>
        <div className="w-full h-[88px] relative mt-12">
          <div className=" hidden w-[150px] h-[88px] ml-auto bg-white relative rounded-s-[25px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:rounded-s-[25px]"></div>
          <MdNotificationsActive className="w-full text-white text-[50px] absolute top-2/4 translate-y-[-50%]" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
