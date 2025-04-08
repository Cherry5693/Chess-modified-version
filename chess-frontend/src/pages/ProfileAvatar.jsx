import React from "react";
import "../styles/ProfileAvatar.css"; // We'll add some basic CSS for hover effect

const ProfileAvatar = () => {
  // Retrieve user info from localStorage (or from a global auth context)
  const username = localStorage.getItem("username") || "Guest User";
  const email = localStorage.getItem("email") || "guest@example.com";
  
  // If you store the profile picture URL in localStorage (or a context), retrieve it
  // Otherwise, use a default avatar
  const profilePic =
    localStorage.getItem("profilePic") ||
    "https://via.placeholder.com/40?text=Avatar"; // default placeholder

  return (
    <div className="profile-avatar">
      <img src={profilePic} alt="Profile" className="avatar-image" />
      <div className="avatar-tooltip">
        <p className="tooltip-username">{username}</p>
        <p className="tooltip-email">{email}</p>
      </div>
    </div>
  );
};

export default ProfileAvatar;
