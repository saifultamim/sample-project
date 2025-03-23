"use client";
import React, { useEffect, useState } from "react";
import { getUser } from "../registration/server-action";
import { userDelete, userEdit } from "./server-action";

const Page = () => {
  const [users, setUsers] = useState([]);

  const updated = async () => {
    const response = await getUser();
    console.log("updated ", response.result);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser();
        setUsers(data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const edit = async (id) => {
    try {
      const data = await userEdit(id);
      setUsers(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleted = async (id) => {
    try {
      const data = await userDelete(id);
      setUsers(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <p>update page</p>
      <button onClick={() => updated()}>update</button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Username</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Password</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Edit</th>
              <th className="px-4 py-2 text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{user?.username}</td>
                <td className="px-4 py-2">{user?.email}</td>
                <td className="px-4 py-2">{user?.password}</td>
                <td className="px-4 py-2">{user?.location}</td>
                <td onClick={() => edit(user?.id)} className="px-4 py-2">
                  Edit
                </td>
                <td onClick={() => deleted(user?.id)} className="px-4 py-2">
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page; // Make sure to export the capitalized Page component
