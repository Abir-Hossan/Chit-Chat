import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import HomePic from "../assets/homepic.png";

const FriendList = () => {
  return (
    <div className="w-[430px] rounded-[20px] shadow-xl mt-[43px] px-5">
      <div className=" flex justify-between items-center">
        <h2 className=" font-pops font-semibold text-[20px] ">Friend List</h2>
        <HiDotsVertical />
      </div>
      <div className=" w-full h-[450px] overflow-y-scroll  rounded-[20px]">
        <div className=" flex justify-between mt-5 border-b pb-6 border-black/25">
          <div className=" flex justify-between gap-5">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={HomePic}
              alt="HomePic"
            />
            <div>
              <h4 className="font-pops font-medium text-[18px] ">
                Friends Reunion
              </h4>
              <p className="font-pops font-medium text-[14px] text-gray-400 ">
                Hi Guys, Whatsup!
              </p>
            </div>
          </div>
          <button className="px-5 py-2 bg-primary rounded-[10px] font-pops font-normal text-[18px] text-white">
            Join
          </button>
        </div>
        <div className=" flex justify-between mt-5 border-b pb-6 border-black/25">
          <div className=" flex justify-between gap-5">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={HomePic}
              alt="HomePic"
            />
            <div>
              <h4 className="font-pops font-medium text-[18px] ">
                Friends Reunion
              </h4>
              <p className="font-pops font-medium text-[14px] text-gray-400 ">
                Hi Guys, Whatsup!
              </p>
            </div>
          </div>
          <button className="px-5 py-2 bg-primary rounded-[10px] font-pops font-normal text-[18px] text-white">
            Join
          </button>
        </div>
        <div className=" flex justify-between mt-5 border-b pb-6 border-black/25">
          <div className=" flex justify-between gap-5">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={HomePic}
              alt="HomePic"
            />
            <div>
              <h4 className="font-pops font-medium text-[18px] ">
                Friends Reunion
              </h4>
              <p className="font-pops font-medium text-[14px] text-gray-400 ">
                Hi Guys, Whatsup!
              </p>
            </div>
          </div>
          <button className="px-5 py-2 bg-primary rounded-[10px] font-pops font-normal text-[18px] text-white">
            Join
          </button>
        </div>
        <div className=" flex justify-between mt-5 border-b pb-6 border-black/25">
          <div className=" flex justify-between gap-5">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={HomePic}
              alt="HomePic"
            />
            <div>
              <h4 className="font-pops font-medium text-[18px] ">
                Friends Reunion
              </h4>
              <p className="font-pops font-medium text-[14px] text-gray-400 ">
                Hi Guys, Whatsup!
              </p>
            </div>
          </div>
          <button className="px-5 py-2 bg-primary rounded-[10px] font-pops font-normal text-[18px] text-white">
            Join
          </button>
        </div>
        <div className=" flex justify-between mt-5 border-b pb-6 border-black/25">
          <div className=" flex justify-between gap-5">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={HomePic}
              alt="HomePic"
            />
            <div>
              <h4 className="font-pops font-medium text-[18px] ">
                Friends Reunion
              </h4>
              <p className="font-pops font-medium text-[14px] text-gray-400 ">
                Hi Guys, Whatsup!
              </p>
            </div>
          </div>
          <button className="px-5 py-2 bg-primary rounded-[10px] font-pops font-normal text-[18px] text-white">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendList;
