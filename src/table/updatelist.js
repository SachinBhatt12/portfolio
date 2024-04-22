import React, { useState , useEffect } from "react";
import axios from "axios";
const EditPopup = ({ onClose , initialValues  }) => {

  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [dob, setDob] = useState(initialValues?.dob);
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState("");


  useEffect(() => {
    console.log("Initial values:", initialValues);
    if (initialValues) {
      setName(initialValues.name || "");
      setSalary(initialValues.salary || "");
      setDob(initialValues.dob ? new Date(initialValues.dob).toISOString().split('T')[0] : "");
      setContact(initialValues.contact || "");
      setStatus(initialValues.status || "");
     
    }
  }, [initialValues]);

  const handleSave = () => {
    const employeeData = {
      name,
      salary,
      dob,
      contact,
      status,
    };

    axios.post(" http://localhost:5000/api/updatetable", employeeData)
      .then(response => {
        console.log("Employee data saved successfully", response.data);
      })
      .catch(error => {
        console.error("Error saving employee data", error);
      });
  };
  
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-md">
        <h1 className="text-2xl font-bold mb-4">Update Employee</h1>

        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block">
              Name:
              <input
                className="border border-gray-300 px-3 py-2 w-full rounded-md"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div className="w-1/2 pl-2">
            <label className="block">
              Salary:
              <input
                className="border border-gray-300 px-3 py-2 w-full rounded-md"
                type="text"
                name="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block">
              Dob:
              <input
                className="border border-gray-300 px-3 py-2 w-full rounded-md"
                type="date"
                name="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </label>
          </div>

          <div className="w-1/2 pl-2">
            <label className="block">
              contact:
              <input
                className="border border-gray-300 px-3 py-2 w-full rounded-md"
                type="text"
                name="salary"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block">
           status:
            <input
              className="border border-gray-300 px-3 py-2 w-full rounded-md"
              type="text"
              name="dob"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </label>
        </div>


        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;
