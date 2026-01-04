import React, { useState } from "react";
import useTitle from "../hooks/useTitle";

import { toast } from "react-toastify";
import AuthProvider from "../providers/AuthProvider";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";

const MyProfile = () => {
  useTitle("Profile");
  const { user, updateUser, setUser, setLoading } = useAuth();
  const [name, setName] = useState(user?.displayName ? user.displayName : "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL ? user.photoURL : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    // Here you can integrate an API or Firebase updateProfile()
    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });

        setTimeout(() => {
          toast.success("Profile updated successfully!");
        }, 10);
        setLoading(false);
      })
      .catch((error) => {
        setTimeout(() => {
          toast.error(error.message || "Something went wrong!");
        }, 10);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-secondary-content flex flex-col items-center justify-start p-8 space-y-10">
      {/* User Information */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 text-center">
        <img
          src={user?.photoURL}
          alt="User Avatar"
          className="w-28 h-28 mx-auto rounded-full border-4 border-primary object-cover shadow-md"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          {user?.displayName}
        </h2>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      {/* Update Form */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-5 border-b pb-2">
          Update Profile Information
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Photo URL
            </label>
            <input
              name="photoURL"
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
