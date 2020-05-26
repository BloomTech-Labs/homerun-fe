import React, { useState } from "react";
import axios from "axios";

function ContactUsForm() {
  const emailServiceURL = "https://formspree.io/xoqnlllw";
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(emailServiceURL, form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => setStatus("Error"));
  }

  return (
    <section className="grid h-screen p-8">
      <form
        className="w-full h-auto m-auto border border-gray-400 rounded-md tablet:w-1/2 desktop:w-1/3"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <h1>Contact Us</h1>
          <p>We would love to hear from you!</p>
        </div>
        <div className="mt-2">
          <label htmlFor="name" className="font-bold uppercase ">
            Full Name:
          </label>
          <input
            className="w-full h-auto p-2 text-gray-700 bg-gray-200 border border-gray-400 border-solid rounded-md "
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={form.name}
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="email" className="font-bold uppercase ">
            Email:
          </label>
          <input
            className="w-full h-auto p-2 text-gray-700 bg-gray-200 border border-gray-400 border-solid rounded-md "
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={form.email}
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="message" className="font-bold uppercase ">
            Message:
          </label>
          <textarea
            className="w-full p-2 text-gray-700 bg-gray-200 border border-gray-400 border-solid rounded-md "
            name="message"
            id=""
            cols="20"
            rows="10"
            onChange={handleChange}
            value={form.message}
            required
          />
        </div>
        {status === "Error" && (
          <p className="block w-full mt-2 text-right text-hive-dark">
            Note: This currently does not work
          </p>
        )}
        <div className="flex justify-end w-full">
          <button className="w-6/6 h-auto px-4 py-2 mt-3 rounded-md phone:flex-grow tablet:flex-grow-0 bg-hive text-white">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactUsForm;
