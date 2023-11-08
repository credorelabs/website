import React, { useEffect, useState, useRef } from "react";
import { FaGithub, FaDiscord, FaMediumM, FaTwitter } from "react-icons/fa";
import { MdPlace, MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import {
  useFormik,
  Field,
  FieldArray,
  FormikErrors,
  FormikProps,
  withFormik,
  Formik,
  FormikProvider,
} from "formik";
import Form from "./RequestModal";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const form = useRef();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      org: "",
      country,
      query: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name Required.")
        .min(3, "Minimum 3 letter")
        .max(50, "Maximum 50 letter"),
      email: Yup.string().email().required(" Email ID Required"),
      phone: Yup.string().required("Phone no required"),
      org: Yup.string().required("Company name required"),
      country: Yup.string().required("Country required"),
      query: Yup.string().required("Please enter your query"),
    }),

    onSubmit: async (values) => {
      console.log("values: ", values);

      let formData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        org: values.org,
        country: values.country,
        query: values.query,
        to_name: "Team",
      };

      try {
        // Send Email
        // e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs
          .sendForm(
            "service_7cp4rhl",
            "template_iq5u1yc",
            form.current,
            "h38-IC67AZT_NCMwl"
          )
          .then(
            (result) => {
              alert("Your message is sent successfully");
              // show the user a success message
            },
            (error) => {
              alert("Error in sending message, Please try again later!");
              // show the user an error
            }
          );

        // formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="p-5">
          <div className="p-5 pl-0 text-center pb-2 note:pb-4 lap:pb-10">
            <h1 className="">Contact Us</h1>
          </div>

          <div className="detailSectn tab:flex gap-10 justify-between">
            <div className="w-full">
              <h5 className="text-[#29564b] mb-4 border-b border-[#F15928]">
                Contact Info
              </h5>

              <div className="flex gap-5">
                <MdPlace size={42} />
                <div className="flex flex-col gap-2">
                  <h5 className="font-medium ">Branch Office</h5>
                  <p className="font-medium text-xsm text-[#29564b] ml-2">
                    108 A ,108 B, KIIT-Technology Business Incubator Campus 11,
                    KIIT-DU, Bhubaneswar, Khordha, Odisha, India-751024
                  </p>

                  <h5 className="font-medium">Registered Office</h5>
                  <p className="font-medium text-xsm text-[#29564b] ml-2">
                    Bhumkar Chowk, Pune, Maharashtra - 411057
                  </p>
                </div>
              </div>

              <div className="mb-4" />

              <div className="flex gap-5 items-center">
                <MdPhone size={24} />
                <div className="flex flex-col gap-2">
                  <p>
                    <a
                      className="font-medium text-[#29564b] ml-2 text-xsm"
                      href="tel:+918600936299"
                    >
                      +91-86009 36299
                    </a>
                  </p>
                </div>
              </div>

              <div className="mb-4" />

              <div className="flex gap-5 items-center">
                <MdEmail size={24} />
                <div className="flex flex-col gap-2">
                  <a
                    className="font-medium text-[#29564b] ml-2 text-xsm"
                    href="mailto:info@credore.xyz"
                  >
                    info@credore.xyz
                  </a>
                </div>
              </div>

              <div className="mb-10" />

              <p className="text-sm font-medium">
                Want to schedule a demo or consultation with Credore&apos;s team
              </p>
              <button
                className="mt-2 p-4 py-1 text-sm flex-shrink-0 text-white bg-[#f15928] font-medium text-xsm rounded-sm"
                type="button"
                onClick={openModal}
              >
                Request Now
              </button>
              <Form
                isOpen={isOpen}
                closeModal={closeModal}
                openModal={openModal}
              />
            </div>

            {/* <FaLocationDot /> */}
            <div className="w-full">
              <h5 className="text-[#29564b] mb-1">
                Please enter your details to get in touch
              </h5>
              <form
                className="flex flex-col w-full gap-1"
                onSubmit={formik.handleSubmit}
                ref={form}
              >
                <div className="py-2">
                  <input type="hidden"
                    name="from_email"
                    value={'no-reply@credore.xyz'}
                    />
                  <input
                    className={`w-full rounded-sm border bg-gray-100 px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 lg:w-full ${
                      formik.touched.name && Boolean(formik.errors.name)
                        ? " border-[#F15928] text-red-700 bg-[#FFFFFF]"
                        : "border-[#81A79D] bg-[#FEFEFE]"
                    } px-5 py-2 border-1 border-solid p-2 placeholder:text-slate-400 text-sm opacity-90 focus:border-gray-500 focus:border-1 peer`}
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="Your Name *"
                  />
                  {/* <span className="text-xs font-light text-red-600">
                    {formik.touched.name && formik.errors.name}
                  </span> */}
                </div>

                <div className="tab:py-2 tab:flex items-center gap-4">
                  <div className="w-full tab:w-1/2 py-2 tab:py-0">
                    <input
                      className={`block w-full rounded-sm border px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 lg:w-full ${
                        formik.touched.email && Boolean(formik.errors.email)
                          ? " border-[#F15928] text-red-700 bg-[#FFFFFF]"
                          : "border-[#81A79D] bg-[#FEFEFE]"
                      }px-5 py-2 border-1 border-solid p-2 placeholder:text-slate-400 text-sm opacity-90 focus:border-gray-500 focus:border-1 peer`}
                      type="text"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      placeholder="Your Email ID *"
                    />
                    {/* <span className="text-xs font-light text-red-600">
                      {formik.touched.email && formik.errors.email}
                    </span> */}
                  </div>

                  <div className="w-full tab:w-1/2 py-2 tab:py-0">
                    <input
                      className={`block w-full rounded-sm border px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 lg:w-full ${
                        formik.touched.phone && Boolean(formik.errors.phone)
                          ? " border-[#F15928] text-red-700 bg-[#FFFFFF]"
                          : "border-[#81A79D] bg-[#FEFEFE]"
                      }px-5 py-2 border-1 border-solid p-2 placeholder:text-slate-400 text-sm opacity-90 focus:border-gray-500 focus:border-1 peer`}
                      type="text"
                      name="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      placeholder="Your Phone No *"
                    />
                    {/* <span className="text-xs font-light text-red-600">
                      {formik.touched.phone && formik.errors.phone}
                    </span> */}
                  </div>
                </div>

                <div className="tab:py-2 tab:flex items-center gap-4">
                  <div className="w-full tab:w-1/2 py-2 tab:py-0">
                    <input
                      className={`block w-full rounded-sm border px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 lg:w-full ${
                        formik.touched.org && Boolean(formik.errors.org)
                          ? " border-[#F15928] text-red-700 bg-[#FFFFFF]"
                          : "border-[#81A79D] bg-[#FEFEFE]"
                      }px-5 py-2 border-1 border-solid p-2 placeholder:text-slate-400 text-sm opacity-90 focus:border-gray-500 focus:border-1 peer`}
                      type="text"
                      name="org"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.org}
                      placeholder="Your Company Name *"
                    />
                    {/* <span className="text-xs font-light text-red-600">
                      {formik.touched.org && formik.errors.org}
                    </span> */}
                  </div>

                  <div className="w-full tab:w-1/2 py-2 tab:py-0">
                    <input
                      className={`block w-full rounded-sm border px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 lg:w-full ${
                        formik.touched.country && Boolean(formik.errors.country)
                          ? " border-[#F15928] text-red-700 bg-[#FFFFFF]"
                          : "border-[#81A79D] bg-[#FEFEFE]"
                      }px-5 py-2 border-1 border-solid p-2 placeholder:text-slate-400 text-sm opacity-90 focus:border-gray-500 focus:border-1 peer`}
                      type="text"
                      name="country"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.country}
                      placeholder="Country (Optional)"
                    />
                    {/* <span className="text-xs font-light text-red-600">
                      {formik.touched.country && formik.errors.country}
                    </span> */}
                  </div>
                </div>

                <div className="py-2">
                  <textarea
                    className={`block w-full rounded-sm border px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 lg:w-full ${
                      formik.touched.query && Boolean(formik.errors.query)
                        ? " border-[#F15928] text-red-700 bg-[#FFFFFF]"
                        : "border-[#81A79D] bg-[#FEFEFE]"
                    }px-5 py-2 border-1 border-solid p-2 placeholder:text-slate-400 text-sm opacity-90 focus:border-gray-500 focus:border-1 peer`}
                    // type="text"
                    name="query"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.query}
                    placeholder="Your Query *"
                  />
                  {/* <span className="text-xs font-light text-red-600">
                    {formik.touched.query && formik.errors.query}
                  </span> */}
                </div>

                <div className="mt-2">
                  <button
                    className="primary-inset rounded-sm px-5 py-1 bg-[#F15928]"
                    type="submit"
                    disabled={formik.isSubmitting}
                  >
                    <p className="text-sm font-medium text-white">Submit</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
