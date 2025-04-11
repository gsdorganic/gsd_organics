import React from "react";

const Profile = () => {
  const user = {
    name: "Hariom Sharma",
    email: "hariomsharmagsd@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=3", // Placeholder avatar image
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-500"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
        <p className="text-gray-500 mb-6">{user.email}</p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
