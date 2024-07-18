import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    option: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send data to backend or validate inputs
    console.log(formData); // Temporary: Log form data to console
    // Reset form fields after submission (optional)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      option: '',
      message: '',
    });
  };

  return (
    <div>
     
      <form className="bg-white shadow rounded p-4 ml-64 w-max">
      <h2 className="text-2xl font-bold mb-4">Contact Form 2</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              className="border rounded px-4 py-2 w-full"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-1">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              className="border rounded px-4 py-2 w-full"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <label htmlFor="email" className="block mb-1 mt-4">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="border rounded px-4 py-2 w-full"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="phone" className="block mb-1 mt-4">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone"
          className="border rounded px-4 py-2 w-full"
          value={formData.phone}
          onChange={handleChange}
        />
        <div className="mt-4">
          <label className="block mb-1">Select option</label>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center mr-4 mb-2">
              <input
                type="radio"
                id="graphics"
                name="option"
                value="Graphics Design"
                onChange={handleChange}
                checked={formData.option === 'Graphics Design'}
                className="mr-2"
              />
              <label htmlFor="graphics" className="ml-2">Graphics Design</label>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <input
                type="radio"
                id="web"
                name="option"
                value="Web Development"
                onChange={handleChange}
                checked={formData.option === 'Web Development'}
                className="mr-2"
              />
              <label htmlFor="web" className="ml-2">Web Development</label>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <input
                type="radio"
                id="logo"
                name="option"
                value="Logo Design"
                onChange={handleChange}
                checked={formData.option === 'Logo Design'}
                className="mr-2"
              />
              <label htmlFor="logo" className="ml-2">Logo Design</label>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <input
                type="radio"
                id="others"
                name="option"
                value="Others"
                onChange={handleChange}
                checked={formData.option === 'Others'}
                className="mr-2"
              />
              <label htmlFor="others" className="ml-2">Others</label>
            </div>
          </div>
        </div>
        <label htmlFor="message" className="block mb-1 mt-4">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          className="border rounded px-4 py-2 mt-1 w-full h-48 resize-none"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 mt-4 w-full hover:bg-blue-600 transition-colors duration-300"
          onClick={handleSubmit}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
