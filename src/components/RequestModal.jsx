import { Fragment, useState, createRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Swal from "sweetalert2";
import axios from "axios";

function Home({ OnClose }) {
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [name, setName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [remarks, setRemarks] = useState("");

  const url = process.env.NEXT_PUBLIC_URL;
  console.log(url)
  const OTP_URL = `${url}/auth/email-verify`;


  const validateEmail = (data) => {
    return String(data)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (data) => {
    let regex = new RegExp(/^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6,15}[0-9]{1}$/);
    if (!data) return false;
    return regex.test(data);
  };


  const sendOtp = async (email) => {
    const res = await axios.post(OTP_URL, { email });
    return res?.data?.signInOtp;
  };


  const submitData = async () => {
    const inputData = {
      name: name,
      email: email,
      phone: phone,
      companyName: orgName,
      designation: designation,
      query: remarks,
    };

    const response = await axios.post(`${url}/website/demo`, inputData);

    if (response?.data?.statusCode === 201) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "We have received your details and our team will contact you shortly!",
      });
      OnClose();
    } else {
      throw new Error("Server error");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name) return setInputError("Please enter your full name");
    if (!validateEmail(email)) return setInputError("Please enter a valid email");
    if (!validatePhone(phone)) return setInputError("Please enter a valid phone number");
    if (!orgName) return setInputError("Please enter your company name");
    if (!designation) return setInputError("Please enter your designation");

    try {
      setLoading(true);
      setInputError("");

      /* -------- SEND OTP -------- */
      const otpRes = await sendOtp(email);

      /* -------- VERIFY OTP -------- */
      const result = await Swal.fire({
        title: "Verify Email",
        input: "text",
        inputLabel: `OTP sent to ${email}`,
        confirmButtonColor: "#F15928",
        showCancelButton: true,
        inputPlaceholder: "Enter OTP",
      });

      if (result.isConfirmed) {
        if (result.value === otpRes) {
          await submitData();   // final submit
        } else {
          Swal.fire("Invalid OTP", "Please enter correct OTP", "error");
        }
      }

    } catch (err) {
      Swal.fire("Error", "Something went wrong. Please try again.", "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {inputError && <div className="text-red-500 text-sm mb-2">{inputError}</div>}

      <div className="my-3">
        <input
          type="text"
          className="p-2 pt-1 pb-1 border border-[#F15928] outline-none text-sm w-full rounded-md"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Your Full Name *"
        />
      </div>

      <div className="flex gap-3">
        <div className="my-3 w-full">
          <input
            type="text"
            className="p-2 pt-1 pb-1 border border-[#F15928] outline-none text-sm w-full rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Your Email *"
          />
        </div>

        <div className="my-3 w-full">
          <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="IN"
            value={phone}
            onChange={setPhone}
            className="p-2 pt-1 pb-1 border border-[#F15928] outline-none text-sm w-full rounded-md"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <div className="my-3 w-full">
          <input
            type="text"
            className="p-2 pt-1 pb-1 border border-[#F15928] outline-none text-sm w-full rounded-md"
            onChange={(e) => setOrgName(e.target.value)}
            value={orgName}
            placeholder="Your Organization Name *"
          />
        </div>

        <div className="my-3 w-full">
          <input
            type="text"
            className="p-2 pt-1 pb-1 border border-[#F15928] outline-none text-sm w-full rounded-md"
            onChange={(e) => setDesignation(e.target.value)}
            value={designation}
            placeholder="Your Designation *"
          />
        </div>
      </div>

      <div className="my-3">
        <textarea
          className="p-2 pt-1 pb-1 border border-[#F15928] outline-none text-sm w-full rounded-md"
          onChange={(e) => setRemarks(e.target.value)}
          value={remarks}
          placeholder="Your Query (optional)"
        />
      </div>

      <button
        className="px-4 py-2 text-sm w-full text-white bg-[#F15928] font-medium rounded-md disabled:opacity-60"
        type="submit"
        disabled={loading}
      >
        {loading ? "VERIFYING & SUBMITTING..." : "Submit"}
      </button>
    </form>
  );
}

/* ---------------- MODAL ---------------- */

export default function MyModal({ isOpen, closeModal }) {
  return (
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-5 text-left shadow-xl transition-all">
                <div className="flex mb-4 pb-2 items-center border-b justify-between">
                  <Dialog.Title className="text-lg font-medium text-gray-900">
                    Request Demo
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="border px-3 py-1 rounded-md text-sm"
                  >
                    X
                  </button>
                </div>

                <Home OnClose={closeModal} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
