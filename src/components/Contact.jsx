import React, { useState, useRef } from "react";
import {
  MdPlace,
  MdPhone,
  MdEmail,
  MdBusiness,
  MdPublic,
  MdMessage,
  MdPerson,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import Form from "./RequestModal";

const countries = [
  "Australia", "Canada", "France", "Germany", "India", "Japan", "Singapore",
  "United Arab Emirates", "United Kingdom", "United States", "Other"
];

const url=process.env.NEXT_PUBLIC_URL;
const OTP_URL = `${url}/auth/email-verify`;


const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const sendOtp = async (email) => {
    const res = await axios.post(OTP_URL, { email });
    return res?.data?.signInOtp;
  };

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", org: "", country: "", query: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid Email"),
      phone: Yup.string().required("Required"),
      org: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      query: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const otpRes = await sendOtp(values.email);

        const result = await Swal.fire({
          title: "Verify Email",
          input: "text",
          inputLabel: `Code sent to ${values.email}`,
          confirmButtonColor: "#F15928",
          showCancelButton: true,
        });

        if (result.value === otpRes) {
          await axios.post(`${url}/website/contact`, {
            ...values,
            companyName: values.org,
          });

          Swal.fire("Success", "We will contact you soon!", "success");
          resetForm();
        } else if (result.isConfirmed) {
          Swal.fire("Error", "Invalid OTP", "error");
        }
      } catch (e) {
        Swal.fire("Error", "Something went wrong", "error");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="w-full bg-[#f8fafc] py-12 med:py-20" id="contact">
      <div className="max-w-[1300px] mx-auto px-4 med:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl med:text-5xl font-extrabold text-[#29564b]">Contact Us</h1>
          <div className="w-16 h-1 bg-[#F15928] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 med:grid-cols-2 gap-10 xl:gap-16 items-start">

          {/* ================= LEFT COLUMN ================= */}

            {/* Info Section */}
            <div className="space-y-6">
              <h2 className="text-2xl med:text-3xl font-bold text-[#29564b] leading-snug">
                Let's build something <span className="text-[#F15928]">secure</span> together.
              </h2>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-md rounded-xl flex items-center justify-center text-[#F15928] shrink-0">
                    <MdPlace size={22} />
                  </div>
                  <div>
                    {/* <h4 className="font-bold text-[#29564b]">Our Offices</h4> */}
                    <p className="text-sm text-gray-700 font-normal">
                      <b>Branch Office:</b> KIIT-TBI Campus 11, Bhubaneswar
                    </p>
                    <p className="text-sm text-gray-700 font-normal">
                      <b>Registered office:</b> Bhumkar Chowk, Pune
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white shadow-md rounded-xl flex items-center justify-center text-[#F15928] shrink-0">
                    <MdPhone size={20} />
                  </div>
                  <a
                    href="tel:+918600936299"
                    className="font-semibold text-gray-700 hover:text-[#F15928]"
                  >
                    +91-86009 36299
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white shadow-md rounded-xl flex items-center justify-center text-[#F15928] shrink-0">
                    <MdEmail size={20} />
                  </div>
                  <a
                    href="mailto:info@credore.xyz"
                    className="font-semibold text-gray-700 hover:text-[#F15928]"
                  >
                    info@credore.xyz
                  </a>
                </div>
              </div>

                                  {/* Green Request Box */}
            <div className="bg-[#29564b] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group min-h-[180px] flex flex-col justify-center">
              <div className="relative z-10">
                <p className="text-sm text-gray-200 mb-5 leading-relaxed">
                  Explore how Credore can transform your supply chain transparency.
                </p>
                <button
                  onClick={openModal}
                  className="bg-[#F15928] hover:bg-white hover:text-[#29564b] px-8 py-3 rounded-xl font-bold transition-all text-sm"
                >
                  REQUEST NOW
                </button>
              </div>

              <MdBusiness
                className="absolute -right-6 -bottom-6 text-white/10 group-hover:scale-110 transition-transform"
                size={140}
              />
            </div>
            </div>
          {/* ================= RIGHT COLUMN (FORM) ================= */}
          <div className="w-full">
            <div className="bg-white rounded-[2.5rem] p-8 med:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#29564b]">Get in touch</h3>
                <p className="text-gray-400 text-sm mt-1">
                  We'll respond to your inquiry within 24 hours.
                </p>
              </div>

              <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5" ref={form}>

                <div className="grid grid-cols-1 med:grid-cols-2 gap-5">
                  <div className="relative">
                    <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input name="name" placeholder="Full Name" {...formik.getFieldProps("name")}
                      className="w-full pl-12 pr-4 py-1 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#F15928] outline-none transition-all" />
                  </div>

                  <div className="relative">
                    <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input name="email" placeholder="Business Email *" {...formik.getFieldProps("email")}
                      className="w-full pl-12 pr-4 py-1 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#F15928] outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 med:grid-cols-2 gap-5">
                  <div className="relative">
                    <MdPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input name="phone" placeholder="Phone Number *" {...formik.getFieldProps("phone")}
                      className="w-full pl-12 pr-4 py-1 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#F15928] outline-none transition-all" />
                  </div>

                  <div className="relative">
                    <MdPublic className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <MdKeyboardArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    <select name="country" {...formik.getFieldProps("country")}
                      className="w-full pl-12 pr-10 py-1 bg-gray-50 border border-gray-200 rounded-xl appearance-none focus:bg-white focus:border-[#F15928] outline-none transition-all text-gray-600">
                      <option value="" disabled>Select Country *</option>
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <MdBusiness className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input name="org" placeholder="Company Name *" {...formik.getFieldProps("org")}
                    className="w-full pl-12 pr-4 py-1 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#F15928] outline-none transition-all" />
                </div>

                <div className="relative">
                  <MdMessage className="absolute left-4 top-5 text-gray-400" size={18} />
                  <textarea name="query" rows="3" placeholder="How can we help you? *"
                    {...formik.getFieldProps("query")}
                    className="w-full pl-12 pr-4 py-1 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#F15928] outline-none transition-all resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-[#F15928] text-white font-bold py-3 rounded-xl shadow-lg hover:bg-[#d44d22] transition-all"
                >
                  {formik.isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      <Form isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
    </section>
  );
};

export default Contact;
