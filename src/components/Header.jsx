import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Form from "./RequestModal";
import { menuList } from "../constants/menuList";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../../public/assets/images/logo-small.png";

const WhyCredore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState("none");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleOfferingsClick = () => {
    if (display == "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  const handleOfferingsBlur = () => {
    if (display == "block") {
      setDisplay("none");
    }
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <nav className="nav tab:flex items-center justify-between p-10 py-1 xsm:p-1">
        <div className="flex flex-no-shrink items-center mr-6 py-2 text-grey-darkest">
          <Link href="/">
            <a className="font-semibold tracking-tight w-60">
              <Image
                src={"/assets/images/logo-small.png"}
                alt="logo"
                height={50}
                width={210}
                className="logo"
              />
            </a>
          </Link>
        </div>
        <div className="flex">
          <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon absolute top-4 right-0 block cursor-pointer md:hidden px-2 py-4 tab:relative select-none"
            htmlFor="menu-btn"
          >
            <span className="navicon bg-grey-darkest flex items-center relative"></span>
          </label>

          {/* {menuList.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })} */}

          <ul className="menu flex justify-end list-reset m-0 w-full md:w-auto items-center text-sm">
            <li className="">
              <Link href="/about_us">
                <a className="block md:inline-block px-4 py-2 no-underline text-grey-darkest hover:bg-[#0B9173] br-5 hover:text-white hover:underline-offset-0 cursor-pointer b-1">
                  How Credore Helps?
                </a>
              </Link>
            </li>

            <li className="" onMouseLeave={handleOfferingsClick}>
              <a
                className="block md:inline-block px-4 py-2 no-underline text-grey-darkest hover:bg-[#0B9173] br-5 hover:text-white hover:underline-offset-0 cursor-pointer b-1"
                onClick={handleOfferingsClick}
                onMouseEnter={handleOfferingsClick}
                aria-haspopup="menu"
              >
                Our Offerings
                {/* <MdKeyboardArrowDown size={24} /> */}
              </a>

              <ul className="dropdown " style={{ display: display }}>
                <li className="menu-items">
                  <Link href="/offerings_overview">
                    <a className="block md:inline-block px-4 py-2 no-underline text-grey-darkest hover:bg-[#0B9173] br-5 hover:text-white hover:underline-offset-0 cursor-pointer b-1">
                      Overview
                    </a>
                  </Link>
                </li>
                <li className="menu-items">
                  <Link href="/technology">
                    <a className="block md:inline-block px-4 py-2 no-underline text-grey-darkest hover:bg-[#0B9173] br-5 hover:text-white hover:underline-offset-0 cursor-pointer b-1">
                      Technology
                    </a>
                  </Link>
                </li>
              </ul>
            </li>

            {/* <li className="">
            <Link href="https://docs.credore.xyz/">
              <a className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:bg-[#0B9173]">
                Resources
              </a>
            </Link>
          </li> */}

            <li className="">
              {/* <Link href="/use_cases"> */}
              <Link href="/use_cases">
                <a className="block md:inline-block px-4 py-2 no-underline text-grey-darkest hover:bg-[#0B9173] br-5 hover:text-white hover:underline-offset-0 cursor-pointer b-1 br-5">
                  Use Cases
                </a>
              </Link>
            </li>
            <li className="">
              <button
                className="ml-3 p-4 py-1 text-sm flex-shrink-0 text-white bg-[#f15928] font-medium text-xsm rounded-sm border-1 border-gray-300"
                type="button"
                onClick={openModal}
              >
                Request Demo
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <Form isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
    </>
  );
};

export default WhyCredore;
