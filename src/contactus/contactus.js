import React, { useState } from "react";
import "../contactus/contactus.css";

export default function ContactUs() { // Use PascalCase for component names
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, email, phone, budget, message } = formData;
    const messageText = `
      Name: ${name}
      Email: ${email}
      Phone No: ${phone}
      Budget: ${budget}
      Message: ${message}
    `;
    alert(messageText);
    setFormData({
        name: "",
        email: "",
        phone: "",
        budget: "",
        message: ""
      });
  };

  return (
    <div className="grid grid-cols-2 c1">
      <div>
        <h1 className="c2">Contact Us</h1>
        <p className="ct1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <p className="ptext">lorem_ipsum</p>
        <p className="ptext">lorem_ipsum</p>
        <p className="ptext">lorem_ipsum</p>
      </div>
      <div>
        <h1 className="c3">Drop A Line</h1>
        <div className="gri">
          <input
            className="input"
            type="text"
            placeholder="Name"
            name="name" // Connect to state variable
            value={formData.name} // Set input value
            onChange={handleChange} // Handle input change
          />
          <input
            className="input1"
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="grii">
          <input
            className="input3"
            type="text"
            placeholder="Phone No"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            className="input4"
            type="text"
            placeholder="Budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          />
        </div>
        <div className="in5">
          <input
            className="input5"
            type="text"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="btn1">
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
