import { Fragment, useState, createRef } from "react";

import { Dialog, Transition } from "@headlessui/react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import ReCAPTCHA from "react-google-recaptcha";

function Home() {
  const recaptchaRef = createRef();
  const [inputError, setInputError] = useState("");
  const [emailError, setEmailError] = useState(" ");
  const [nameError, setNameError] = useState(" ");
  const [phoneError, setPhoneError] = useState(" ");
  const [designationError, setDesignationError] = useState(" ");
  const [orgNameError, setOrgNameError] = useState(" ");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [name, setName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [successStatus, setSuccessStatus] = useState(false);
  const [selected, setSelected] = useState("IN");
  const [value, setValue] = useState("IN");

  const validateEmail = (data) => {
    return String(data)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (data) => {
    let regex = new RegExp(/^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/);

    // if phonenumber is empty return false
    if (!data) return "false";

    // Return true if the phonenumber matched the ReGex
    if (regex.test(data) == true) return "true";
    else return "false";

    // return String(data)
    //   .toLowerCase()
    //   // .match(/^[+]{1}\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/);
    //   .match(/^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/);
  };

  const onChangeName = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const onChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  // const onChangePhone = (e) => {
  //   const { value } = e.target;
  //   setPhone(value.replace(/\s+/g, ""));
  // };
  const onChangeDesignation = (e) => {
    const { value } = e.target;
    setDesignation(value);
  };
  const onChangeOrg = (e) => {
    const { value } = e.target;
    setOrgName(value);
  };
  const onChangeRemarks = (e) => {
    const { value } = e.target;
    setRemarks(value);
  };

  const submitData = (value) => {
    const inputData = {
      name: name,
      email: email,
      phone: phone,
      companyName: orgName,
      designation: designation,
      query: remarks,
    };
    fetch("https://dev.credore.xyz/users/contact/form", {
      method: "POST",
      body: JSON.stringify(inputData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.message) {
          // setSuccessStatus(data?.message);
          alert("Something went wrong: " + data?.message);
        } else {
          // setSuccessStatus(
          //   "Thank you for registration. We will notify you at the earliest."
          // );
          alert(
            "Thank you for registration. We will notify you at the earliest."
          );
        }
      })
      .catch(() => {
        alert("Something went wrong: " + data?.message);
        closeModal;
      });
    // setSuccessStatus("Something Went Wrong"));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // const recaptchaValue = recaptchaRef.current.getValue();
    const recaptchaValue = 1;
    if (!name) {
      setInputError("Please enter your full name");
    } else if (!validateEmail(email)) {
      setInputError("Please enter a valid email");
    } else if (!validatePhone(phone)) {
      setInputError("Please enter a valid phone number");
      setInputError(phone);
    } else if (!orgName) {
      setInputError("Please enter your company name!");
    } else if (!designation) {
      setInputError("Please enter your designation");
    } else if (!recaptchaValue) {
      setCaptchaError(true);
      setInputError(true);
    } else {
      setInputError(null);
      setNameError(null);
      setEmailError(null);
      setPhoneError(null);
      setOrgNameError(null);
      setDesignationError(null);
      setCaptchaError(false);
      submitData(email);
    }
  };
  const secretKey = "6LctN-cfAAAAABG5jg9iToRqj-IojqOhY5hBltWS";

  return (
    <form onSubmit={onSubmit}>
      <div className="text-red-500 text-sm">{inputError}</div>
      <div className="my-3">
        <input
          type="text"
          className="p-2 pt-1 pb-1 border-1 md:round border-[#F15928] outline-none text-sm w-full br-5"
          onChange={onChangeName}
          value={name}
          placeholder="Your Full Name *"
        />
        {/* <div className="text-red-500 text-xsm">{nameError}</div> */}
      </div>

      <div className="note:flex items-center gap-3">
        <div className="my-3 w-full">
          <input
            type="text"
            className="p-2 pt-1 pb-1 border-1 md:round border-[#F15928] outline-none text-sm w-full br-5"
            onChange={onChangeEmail}
            value={email}
            placeholder="Your Email *"
          />
          {/* <div className="text-red-500 text-xsm">{emailError}</div> */}
        </div>

        {/* country code */}
        <div className="my-3 w-full">
          <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="IN"
            value={phone}
            onChange={setPhone}
            focusInputOnCountrySelection
            className="p-2 pt-1 pb-1 border-1 md:round border-[#F15928] outline-none text-sm w-full br-5"
          />
          {/* <div className="text-red-500 text-xsm">{phoneError}</div> */}
        </div>
      </div>

      <div className="note:flex items-center gap-3">
        <div className="my-3 w-full">
          <input
            type="text"
            className="p-2 pt-1 pb-1 border-1 md:round border-[#F15928] outline-none text-sm w-full br-5"
            onChange={onChangeOrg}
            value={orgName}
            placeholder="Your Organization Name *"
          />
          {/* <div className="text-red-500 text-xsm">{orgNameError}</div> */}
        </div>
        <div className="my-3 w-full">
          <input
            type="text"
            className="p-2 pt-1 pb-1 border-1 md:round border-[#F15928] outline-none text-sm w-full br-5"
            onChange={onChangeDesignation}
            value={designation}
            placeholder="Your Designation *"
          />
          {/* <div className="text-red-500 text-xsm">{designationError}</div> */}
        </div>
      </div>

      <div className="my-3">
        <textarea
          className="p-2 pt-1 pb-1 border-1 md:round border-[#F15928] outline-none text-sm w-full br-5"
          onChange={onChangeRemarks}
          value={remarks}
          placeholder="Your Query (optional)"
        />
        {/* <div className="text-red-500 text-xsm">{orgNameError}</div> */}
      </div>
      {/* <div className="my-3">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LctN-cfAAAAAPoMPQhN4xmcxvQ9GmO2gEKzPJqQ"
          onChange={() => captchaError(false)}
        />
      </div> */}
      <button
        className="px-4 py-1 text-sm flex-shrink-0 text-white bg-[#F15928] font-medium"
        type="submit"
      >
        Submit
      </button>
      {successStatus === "Something Went Wrong" ? (
        <div className="text-red-500 text-xsm">{successStatus}</div>
      ) : (
        <div className="text-blue-500">{successStatus}</div>
      )}
    </form>
  );
}

export default function MyModal({ isOpen, closeModal }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white note:p-6 p-3 text-left align-middle shadow-xl transition-all">
                  <div className="flex mb-5 pb-2 items-center border-b justify-between">
                    <Dialog.Title
                      as="h3"
                      className="note:text-xl text-base font-medium leading-6 text-gray-900"
                    >
                      Request Demo
                    </Dialog.Title>
                    <button
                      type="button"
                      className="rounded-md border border-gray-300 bg-blue-100 px-3 py-1 font-medium text-sm font-medium text-white-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                  <div className="mt-2">
                    <Home />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
