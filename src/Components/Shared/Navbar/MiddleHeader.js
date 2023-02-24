import React from "react";
import logo from "../../../Assets/Images/logo.png";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const MiddleHeader = () => {
  const location = useLocation();
  const pathName = location?.pathname;

  return (
    <>
      {!pathName.includes("/dashboard") && (
        <div className="lg:block hidden container mx-auto my-3 z-50 overflow-hidden">
          <div className="flex justify-between items-center">
            {/* Main Logo */}
            <div>
              <Link to="/">
                <div className="flex items-center gap-x-2">
                  <img src={logo} alt="Main Logo" className="lg:w-12 w-64" />
                  <h4 className="font-semibold text-lg text-[#15A9E3]">
                    HEALTH OS
                  </h4>
                </div>
              </Link>
            </div>
            {/* Right Action Button */}
            <div className="flex items-center gap-x-6">
              <div className="lg:flex hidden items-center gap-x-6">
                <div className="border-r-2 pr-5 cursor-pointer text-gray-600 hover:text-[#2563eb] duration-300">
                  <div className="flex items-center gap-x-2">
                    <FaPhoneAlt className="text-lg text-[#2563eb] animate-bounce" />
                    <p className="font-semibold"> (00) 000 123 456789</p>
                  </div>
                </div>
                <div className="border-r-2 pr-5 cursor-pointer hover:text-[#2563eb] duration-300">
                  <div className="flex items-center gap-x-2">
                    <FaEnvelope className="text-lg text-[#2563eb] animate-bounce" />
                    <p className="font-semibold"> mail@healthos.com</p>
                  </div>
                </div>
                <div className="pr-5 cursor-pointer hover:text-[#2563eb] duration-300">
                  <div className="flex items-center gap-x-2">
                    <FaLocationArrow className="text-lg text-[#2563eb] animate-bounce" />
                    <p className="font-semibold"> Store Location</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-1">
              <Link
                to="/login"
                className="font-semibold text-black hover:text-[#2563eb] duration-300"
              >
                SIGNIN
              </Link>
              <span> / </span>
              <Link
                to="/signup"
                className="font-semibold text-black hover:text-[#2563eb] duration-300"
              >
                SIGN UP
              </Link>
              <Link
                to="/dashboard"
                className="font-bold text-white hover:text-[#2563eb] bg-[#2563eb] hover:bg-white px-2 py-1 ml-4 border border-[#2563eb] rounded-md duration-300"
              >
                DASHBOARD
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MiddleHeader;
