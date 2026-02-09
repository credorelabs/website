import React, { useState, useRef } from "react";
import { MdPlace, MdPhone, MdEmail } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import Form from "./RequestModal";

/* 🚫 Disposable Email Domains */
const disposableDomains = [
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "yopmail.com",
  "throwawaymail.com",
  "fakeinbox.com",
  "getnada.com",
  "trashmail.com",
];

const OTP_URL = "https://api.credore.xyz/x1/auth/email-verify";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [backendOtp, setBackendOtp] = useState(""); // ✅ store backend OTP
  const form = useRef();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  /* 🔐 SEND OTP */
  const sendOtp = async (email) => {
    const res = await axios.post(OTP_URL, {
      email,
    
    });
    

    // ✅ IMPORTANT: adjust path if backend sends differently
   const otpFromBackend = res.data.signInOtp;

    // Save OTP in state
    

    // Log OTP
    

    return res?.data?.signInOtp;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      org: "",
      country: "",
      query: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name Required").min(3).max(50),

      email: Yup.string()
        .required("Email Required")
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          "Invalid Email"
        )
        .test(
          "no-disposable-email",
          "Disposable email addresses are not allowed",
          (value) => {
            if (!value) return true;
            const domain = value.split("@")[1];
            return !disposableDomains.includes(domain);
          }
        ),

      phone: Yup.string().required("Phone Required"),
      org: Yup.string().required("Company Required"),
      country: Yup.string().required("Country Required"),
      query: Yup.string().required("Query Required"),
    }),

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        /* 1️⃣ SEND OTP */
        const otpRes = await sendOtp(values.email);

        /* 2️⃣ ASK USER FOR OTP */
       const result = await Swal.fire({
  title: "Verify Email",
  input: "text",
  inputLabel: "Enter OTP sent to your email",
  inputPlaceholder: "Enter OTP",
  showCancelButton: true,
  confirmButtonText: "Verify",
  inputValidator: (value) => {
    if (!value) return "OTP is required";
  },
});

// Check if user clicked cancel
if (result.isDismissed) {
  setSubmitting(false);
  return;
}

// Get user-entered OTP safely
const userOtp = result.value;


        /* 3️⃣ FRONTEND OTP COMPARISON */
        if (userOtp !== otpRes) {
          Swal.fire({
            icon: "error",
            title: "Invalid OTP",
            text: "Please enter the correct OTP",
          });
          setSubmitting(false);
          return;
        }

        /* 4️⃣ SUBMIT FORM ONLY IF OTP MATCHES */
        const formData = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          companyName: values.org,
          country: values.country,
          query: values.query,
        };

        const response = await axios.post(
          "https://api.credore.xyz/x1/website/contact",
          formData
        );

        if (response?.data?.statusCode === 201) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text:
              "We have received your details. Our team will contact you shortly.",
          });
          resetForm();
        } else {
          Swal.fire({
            icon: "warning",
            text: "Server error. Please try again later.",
          });
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          text: "Something went wrong. Please try again.",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="p-5">
          <div className="p-5 pl-0 text-center pb-2">
            <h1>Contact Us</h1>
          </div>

          <div className="detailSectn tab:flex gap-10 justify-between">
            <div className="w-full">
              <h5 className="text-[#29564b] mb-4 border-b border-[#F15928]">
                Contact Info
              </h5>

              <div className="flex gap-5">
                <MdPlace size={42} />
                <div>
                  <h5 className="font-medium">Branch Office</h5>
                  <p className="text-xsm text-[#29564b] ml-2">
                    108 A ,108 B, KIIT-TBI Campus 11, KIIT-DU, Bhubaneswar, Odisha
                    751024
                  </p>

                  <h5 className="font-medium mt-2">Registered Office</h5>
                  <p className="text-xsm text-[#29564b] ml-2">
                    Bhumkar Chowk, Pune, Maharashtra - 411057
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-5 items-center">
                <MdPhone size={24} />
                <a href="tel:+918600936299" className="text-xsm text-[#29564b]">
                  +91-86009 36299
                </a>
              </div>

              <div className="mt-4 flex gap-5 items-center">
                <MdEmail size={24} />
                <a
                  href="mailto:info@credore.xyz"
                  className="text-xsm text-[#29564b]"
                >
                  info@credore.xyz
                </a>
              </div>

              <div className="mt-8">
                <p className="text-sm font-medium">
                  Want to schedule a demo or consultation with Credore&apos;s
                  team?
                </p>
                <button
                  className="mt-2 p-2 px-4 bg-[#f15928] text-white rounded-sm"
                  onClick={openModal}
                  type="button"
                >
                  Request Now
                </button>
                <Form
                  isOpen={isOpen}
                  closeModal={closeModal}
                  openModal={openModal}
                />
              </div>
            </div>

            {/* FORM UI — UNCHANGED */}
            <div className="w-full">
              <h5 className="text-[#29564b] mb-1">
                Please enter your details to get in touch
              </h5>

              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-2"
                ref={form}
              >
                <input name="name" placeholder="Your Name *" {...formik.getFieldProps("name")} className="border p-2" />
                <input name="email" placeholder="Your Email ID *" {...formik.getFieldProps("email")} className="border p-2" />
                <input name="phone" placeholder="Your Phone No *" {...formik.getFieldProps("phone")} className="border p-2" />
                <input name="org" placeholder="Your Company Name *" {...formik.getFieldProps("org")} className="border p-2" />
                <input name="country" placeholder="Country *" {...formik.getFieldProps("country")} className="border p-2" />
                <textarea name="query" placeholder="Your Query *" {...formik.getFieldProps("query")} className="border p-2" />

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="bg-[#F15928] text-white p-2 mt-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
