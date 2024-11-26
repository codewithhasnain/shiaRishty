import React, { useState } from "react";
import ManageUsers from "./ManageUsers";
import Messages from "./Messages";
import ManageProfiles from "./ManageProfiles"; // Import ManageProfiles
import { FiUsers, FiMail, FiEdit3 } from "react-icons/fi";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [view, setView] = useState("users");

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-dashboard-main">
        <div className="admin-dashboard-buttons">
          <button onClick={() => setView("users")}>
            <FiUsers /> Manage Users
          </button>
          <button onClick={() => setView("messages")}>
            <FiMail /> Contact Messages
          </button>
          <button onClick={() => setView("profiles")}>
            <FiEdit3 /> Manage Profiles
          </button>
        </div>
        <div className="admin-dashboard-content">
          {view === "users" && <ManageUsers />}
          {view === "messages" && <Messages />}
          {view === "profiles" && <ManageProfiles />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
