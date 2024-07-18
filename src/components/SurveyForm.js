import React from 'react';

const SurveyForm = () => {
  return (
    <div>
  
      <form className="bg-white shadow rounded p-4 max-w-screen-2xl">
      <h2 className="text-2xl font-bold mb-4">Survey Form</h2>
        <label htmlFor="name" className="block mb-1">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="border rounded px-4 py-2 mt-2 w-full"
        />
        <label htmlFor="email" className="block mb-1 mt-4">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="border rounded px-4 py-2 mt-2 w-full"
        />
        <label htmlFor="age" className="block mb-1 mt-4">Age</label>
        <input
          type="number"
          id="age"
          placeholder="Age"
          className="border rounded px-4 py-2 mt-2 w-full"
        />
        <label htmlFor="subject" className="block mb-1 mt-4">Which option best describes you?</label>
        <select className="border rounded px-4 py-2 mt-2 w-full" id="subject">
          <option>Select your subject</option>
          <option>Graphics Design</option>
          <option>Web Development</option>
          <option>Logo Design</option>
          <option>Others</option>
        </select>

        <div className="mt-4">
          <label className="block mb-2">Would you recommend our site to a friend?</label>
          <div>
            <input type="radio" id="yes" name="recommend" value="Yes" />
            <label htmlFor="yes" className="ml-2">Yes</label>
          </div>
          <div>
            <input type="radio" id="no" name="recommend" value="No" />
            <label htmlFor="no" className="ml-2">No</label>
          </div>
          <div>
            <input type="radio" id="maybe" name="recommend" value="Maybe" />
            <label htmlFor="maybe" className="ml-2">Maybe</label>
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2">Which languages & frameworks you know?</label>
          <div>
            <input type="checkbox" id="c" name="languages" value="C" />
            <label htmlFor="c" className="ml-2">C</label>
          </div>
          <div>
            <input type="checkbox" id="javascript" name="languages" value="JavaScript" />
            <label htmlFor="javascript" className="ml-2">JavaScript</label>
          </div>
          <div>
            <input type="checkbox" id="python" name="languages" value="Python" />
            <label htmlFor="python" className="ml-2">Python</label>
          </div>
          <div>
            <input type="checkbox" id="java" name="languages" value="Java" />
            <label htmlFor="java" className="ml-2">Java</label>
          </div>
        </div>
        <button className="bg-blue-500 text-white rounded px-4 py-2 mt-4 w-full hover:bg-blue-600 transition-colors duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;
