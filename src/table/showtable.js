import React, { useState, useEffect } from "react";
import EditPopup from "./updatelist";

const TableComponent = () => {
  // http://localhost:5000/api/tablelist
  const [data, setData] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/tablelist")
      .then((response) => response.json())
      .then((apiData) => {
        console.log("API response:", apiData);
        if (apiData.data && typeof apiData.data === "object") {
          setData(apiData.data);
        } else {
          console.error("Invalid data format:", apiData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleEditClick = (employee) => {
    const employeeId = employee.id;
    fetch(`http://localhost:5000/api/updateEmployee/${employeeId}`)
      .then((response) => response.json())
      .then((employeeDetails) => {
        console.log("Employee details:", employeeDetails);
        setEditEmployee(employeeDetails);
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
      });
  };

  const handleCloseEdit = () => {
    setEditEmployee(null);
  };


  return (
    <div>
      {editEmployee  && (
        <EditPopup
          // onClose={() => setShowEditPopup(false)}
          onClose={handleCloseEdit}
          initialValues={editEmployee}
        />
      )}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Dob</th>
            <th className="py-2 px-4 border-b">Salary</th>
            <th className="py-2 px-4 border-b">joiningDate</th>
            <th className="py-2 px-4 border-b">ReleavingDate</th>
            <th className="py-2 px-4 border-b">contactus</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="py-2 px-4 border-b">{row.name}</td>
              <td className="py-2 px-4 border-b">{row.dob}</td>
              <td className="py-2 px-4 border-b">{row.salary}</td>
              <td className="py-2 px-4 border-b">{row.joiningDate}</td>
              <td className="py-2 px-4 border-b">{row.releavingDate}</td>
              <td className="py-2 px-4 border-b">{row.contact}</td>
              <td className="py-2 px-4 border-b">{row.status}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="mr-2 bg-blue-500 text-white py-1 px-2 rounded"
                  onClick={() => handleEditClick(row)}
                >
                  Edit
                </button>
                <button className="bg-red-500 text-white py-1 px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
