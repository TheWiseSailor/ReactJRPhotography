import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      message, // Include the message in the form data
    };

    // You can replace 'YOUR_FORMSPREE_ENDPOINT' with your Formspree form endpoint or a custom backend API endpoint
    const response = await fetch("YOUR_FORMSPREE_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // The form submission was successful. You can add success handling here.
      console.log("Form submitted successfully");
    } else {
      // Handle form submission error here.
      console.error("Form submission failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md p-4  border border-blue-300 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              rows={4} // You can adjust the number of rows as needed
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
