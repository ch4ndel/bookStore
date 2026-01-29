import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/user/delete/${userId}`);
      // Remove deleted user from state
      setUsers(users.filter((user) => user._id !== userId));
      toast.success("User deleted");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4 mt-30">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        {/* Logged-in admin info + Create Book button */}
        <div className="mb-8 p-6 rounded-lg shadow flex justify-between items-center">
          <div>
            <h2 className="font-semibold">Logged-in Admin:</h2>
            <p>Admin Name</p>
            <p className="text-sm">admin@example.com</p>
          </div>
          <div>
            <button className="btn bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600" onClick={()=>navigate("/create")}>
              Create new book +
            </button>
          </div>
        </div>

        {/* Users Table */}
        <div className="rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {users.map((user, index) => (
                <tr key={index} className="">
                  <td className="px-6 py-4">{user.fullname}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <button
                      className="btn bg-red-500 text-white"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
