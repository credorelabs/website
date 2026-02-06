import React, { useState } from "react";

const ContactSection = () => {
  const inputClasses =
    "w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-orange-500";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // ✅ BACKEND-EXPECTED PAYLOAD
    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      phone: formData.phone,
      email: formData.email,
      companyName: formData.companyName,
      message: formData.message,
    };

    try {
      const res = await fetch(
        "https://api.credore.xyz/x1/website/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        companyName: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">

         {/* LEFT */}
<div className="lg:col-span-5">
  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Ready to Transform Your{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
      Trade Operations?
    </span>
  </h2>

  <p className="text-slate-600 text-lg mb-8">
    Connect with Credore to explore secure, blockchain-powered trade digitization.
  </p>

  {/* CONTACT DETAILS – ADD HERE */}
  <div className="space-y-6">

    {/* ADDRESS */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-white border shadow flex items-center justify-center text-orange-500">
        📍
      </div>
      <div>
        <h4 className="font-semibold text-slate-900">Branch Address</h4>
        <p className="text-sm text-slate-600">
          108 A/B, KIIT-TBI, Campus II<br />
          Bhubaneswar, Odisha – 751024
        </p>
      </div>
    </div>

    {/* EMAIL */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-white border shadow flex items-center justify-center text-teal-500">
        ✉️
      </div>
      <div>
        <h4 className="font-semibold text-slate-900">Email</h4>
        <a
          href="mailto:info@credore.xyz"
          className="text-sm text-slate-600 hover:text-orange-500 transition"
        >
          info@credore.xyz
        </a>
      </div>
    </div>

    {/* PHONE */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-white border shadow flex items-center justify-center text-blue-500">
        📞
      </div>
      <div>
        <h4 className="font-semibold text-slate-900">Contact Number</h4>
        <p className="text-sm text-slate-600">
          +91 12345 67890
        </p>
      </div>
    </div>

  </div>
</div>





          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl border p-8">
              <h3 className="text-2xl font-bold mb-6">
                Start your digitization journey
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className={inputClasses} required />
                  <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className={inputClasses} required />
                </div>

                <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className={inputClasses} required />

                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={inputClasses} required />

                <input name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className={inputClasses} required />

                <textarea name="message" rows="4" placeholder="Tell us about your requirements" value={formData.message} onChange={handleChange} className={inputClasses} required />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && <p className="text-green-600">✅ Message sent successfully</p>}
                {error && <p className="text-red-600">❌ {error}</p>}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
