import React, { useState } from "react";
import Link from "next/link";
import Form from "./RequestModal";

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
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  return (
    <>
      {/* Google Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Announcement Banner */}
      <a
        href="https://www.linkedin.com/posts/credore_credore-is-deemed-approved-by-igpi-activity-7351995215353700353-c_Vw"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <div className="relative w-full p-2 animate-pulse border-b border-orange-300 bg-gradient-to-r from-[#fff7f4] via-[#ffece4] to-[#fff7f4] text-center flex flex-col sml:flex-row items-center justify-center gap-1 sml:gap-2 font-semibold text-[10px] sml:text-xs med:text-sm text-[#f15928] drop-shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          <img
            src="/assets/images/honor.png"
            alt="honor"
            width="20"
            height="20"
            className="h-4 w-4 sml:h-5 sml:w-5 mt-0 my-auto"
          />

          <div className="flex flex-wrap items-center justify-center gap-1">
            <span className="whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#f15928] to-[#ff7e4f]">
              First globally deemed approved eBL platform by
            </span>

            <img
              src="/assets/images/partners/igpi-logo.png"
              alt="IGPI"
              width="90"
              height="30"
              className="h-4 w-14 sml:h-5 sml:w-16"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#f15928] via-[#ff7e4f] to-[#f15928]" />
        </div>
      </a>

      {/* Navbar */}
      <nav className="nav tab:flex items-center justify-between p-10 py-1 xsm:p-1 sticky top-0 bg-white z-50 shadow-xl">
        <div className="flex items-center mr-6 py-2">
          <Link href="/">
            <a className="font-semibold tracking-tight w-60">
              <img
                src="/assets/images/logo-small.png"
                alt="logo"
                height="50"
                width="210"
                className="logo"
              />
            </a>
          </Link>
        </div>

        <div className="flex">
          <ul className="menu flex justify-end list-reset m-0 w-full md:w-auto items-center text-sm">
            <li>
              <Link href="/about_us">
                <a className="px-4 py-2 hover:bg-[#0B9173] hover:text-white">
                  How Credore Helps?
                </a>
              </Link>
            </li>

            <li onMouseLeave={handleOfferingsClick}>
              <a
                className="px-4 py-2 hover:bg-[#0B9173] hover:text-white cursor-pointer"
                onClick={handleOfferingsClick}
                onMouseEnter={handleOfferingsClick}
              >
                Our Offerings
              </a>

              <ul className="dropdown" style={{ display }}>
                <li>
                  <Link href="/offerings_overview">
                    <a className="block px-4 py-2 hover:bg-[#0B9173] hover:text-white">
                      Overview
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/technology">
                    <a className="block px-4 py-2 hover:bg-[#0B9173] hover:text-white">
                      Technology
                    </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/use_cases">
                <a className="px-4 py-2 hover:bg-[#0B9173] hover:text-white">
                  Use Cases
                </a>
              </Link>
            </li>

            <li>
              <button
                className="ml-3 px-4 py-1 text-white bg-[#f15928] rounded-sm"
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