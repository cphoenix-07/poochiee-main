import React, { useState } from "react";
import {
  AiOutlineLogin,
  AiOutlineMessage,
  AiOutlineMenu,
} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";;



const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [showOptions, setShowOptions] = useState(false);
  const [mobileActiveOption, setMobileActiveOption] = useState(null);

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleMobileOptionClick = (optionIndex) => {
    setMobileActiveOption(optionIndex);
    setActive(optionIndex);
  };

  const mobileOptions = [
    { icon: <RxPerson size={20} />, label: "Profile" },
    { icon: <HiOutlineShoppingBag size={20} />, label: "Orders" },
    { icon: <HiOutlineReceiptRefund size={20} />, label: "Refunds" },
    { icon: <AiOutlineMessage size={20} />, label: "Inbox" },
    { icon: <MdOutlineTrackChanges size={20} />, label: "Track Order" },
    { icon: <RiLockPasswordLine size={20} />, label: "Change Password" },
    { icon: <TbAddressBook size={20} />, label: "Address" },
  ];

  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 1 ? "text-[red]" : ""
            } 800px:block hidden`}
        >
          Profile
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 2 ? "text-[red]" : ""
            } 800px:block hidden`}
        >
          Orders
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 3 ? "text-[red]" : ""
            } 800px:block hidden`}
        >
          Refunds
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 4 ? "text-[red]" : ""
            } 800px:block hidden`}
        >
          Inbox
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 5 ? "text-[red]" : ""
            } 800px:block hidden`}
        >
          Track Order
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine size={20} color={active === 6 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 6 ? "text-[red]" : ""
            } 800px:block hidden`}
        >
          Change Password
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 7 ? "text-[red]" : ""
            } 800px:block hidden`}
        >
          Address
        </span>
      </div>

      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={20}
              color={active === 7 ? "red" : ""}
            />
            <span
              className={`pl-3 ${active === 8 ? "text-[red]" : ""
                } 800px:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}
      <div
        className="single_item flex items-center cursor-pointer w-full mb-8"
        onClick={logoutHandler}
      >
        <AiOutlineLogin size={20} color={active === 8 ? "red" : ""} />
        <span
          className={`pl-3 ${active === 8 ? "text-[red]" : ""
            } 800px:block hidden`}
        >
          Log out
        </span>
      </div>
      {/* Toggle Button for Mobile */}
      <div className="flex justify-center w-full sm:hidden">
        <AiOutlineMenu
          size={30}
          color="#333"
          className="cursor-pointer"
          onClick={toggleOptions}
        />
      </div>

      {/* Dropdown Options for Mobile */}
      {showOptions && (
        <div className="mt-4 sm:hidden">
          {mobileOptions.map((option, index) => (
            <div
              key={index}
              className={`flex items-center cursor-pointer w-full mb-4 ${mobileActiveOption === index ? "text-[red]" : ""
                }`}
              onClick={() => handleMobileOptionClick(index)}
            >
              {option.icon}
              <span className="pl-3">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileSidebar;