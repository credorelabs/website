import React, { useState } from "react";
import Link from "next/link";
import Form from "./RequestModal";
import ManageCookies from "./ManageCookies";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="linksSectn">
            <div className="quickLinks">
              <h1 className="heading">Quick Links</h1>
              <ul className="linksBx">
                <li>
                  <Link href="/#contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/about_us">How Credore Helps</Link>
                </li>
                <li>
                  <Link href="/offerings_overview">Overview </Link>
                </li>
                <li>
                  <Link href="/technology">Our Technology</Link>
                </li>
                <li>
                  <Link href="/use_cases">Use Cases</Link>
                </li>
                {/* <li>
                  <a href="#">Accessibliity</a>
                </li> */}
              </ul>
            </div>
            <div className="solutionsLinks">
              <h1 className="heading">Solutions</h1>
              <ul className="linksBx">
                <li>
                  <a href="#">Paperless trade finance</a>
                </li>
                <li>
                  <a href="#">Process automation</a>
                </li>
                <li>
                  <a href="#">Smart contracts</a>
                </li>
                <li>
                  <a href="#">Invoice discounting</a>
                </li>
              </ul>
            </div>

            <div className="readyToGoBx">
              <h1 className="heading">Ready To Go Truly Paperless?</h1>
              <p>
                Get a free personalised demo and see how easy it is to manage
                your paperless trade finance.
              </p>
              <div>
                <button
                  className="ml-3 p-4 py-2 text-sm flex-shrink-0 text-white bg-[#f15928] font-medium text-xsm rounded-sm"
                  type="button"
                  onClick={openModal}
                >
                  Request Demo
                </button>
              </div>

              <div>
                <h1 className="heading mt-5">
                  Receive Updates and News from Credore
                </h1>
                <div className="receiveUpdates flex flex-col dsk:flex-row gap-4 py-0">
                  <input
                    type="text"
                    className="p-2 py-1 border-[0.5px] md:round border-[#F15928] outline-none text-sm br-5"
                    placeholder="Enter Your Email"
                    value=""
                    onChange={() => {}}
                  />
                  <button
                    className="px-4 py-1 text-sm flex-shrink-0 text-F15928 bg-[#F15928]"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="copyrightSectn">
            <div>
              &#169; Copyright {new Date().getFullYear()} Credore - All rights
              Reserved
            </div>
            <div className="mediaLinks items-center">
              <ul className="otherLinks">
                <li>
                  <a href="/assets/files/Credore-Privacy-Policy.pdf" target="_blank">Privacy Policy</a>
                </li>
                <li>
                  <a href="/assets/files/Credore-Terms-Of-Use.pdf" target="_blank">Terms Of Use</a>
                </li>
                <li>
                  <a href="/assets/files/Credore-Refund-Policy.pdf" target="_blank">Refund Policy</a>
                </li>
                {/* <li>
                  <a href="cookies_policy">Cookies Policy</a>
                </li> */}
                {/* <a href="privacy_policy">Privacy Policy</a> */}
              </ul>
            </div>
          </div>
        </div>
        <Form isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
      </footer>
      <ManageCookies />
    </>
  );
};

export default Footer;
