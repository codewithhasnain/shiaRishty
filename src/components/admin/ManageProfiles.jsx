import React, { useEffect, useState } from "react";
import fetchWithAuth from "../../utils/fetchWithAuth";
import "./ManageProfiles.css";

const ManageProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");
  const [statuses, setStatuses] = useState(["All"]); // Dynamic statuses list

  const fetchProfiles = async () => {
    setLoading(true);
    try {
      const response = await fetchWithAuth(`${import.meta.env.VITE_API_BASE_URL}/api/profile`);
      const data = await response.json();

      if (data.success) {
        setProfiles(data.profiles);
        setFilteredProfiles(data.profiles);

        // Extract unique statuses from profiles and include "All"
        const uniqueStatuses = ["All", ...new Set(data.profiles.map((profile) => profile.profileStatus))];
        setStatuses(uniqueStatuses);
      } else {
        setError(data.message || "Failed to fetch profiles.");
      }
    } catch (err) {
      setError("An error occurred while fetching profiles.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetchWithAuth(`${import.meta.env.VITE_API_BASE_URL}/api/profile/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (data.success) {
        fetchProfiles(); // Refresh profiles after deletion
      } else {
        alert(data.message || "Failed to delete profile.");
      }
    } catch (err) {
      console.error("Error deleting profile:", err);
    }
  };

  const handleUpdateStatus = async (id, action) => {
    try {
      const response = await fetchWithAuth(
        `${import.meta.env.VITE_API_BASE_URL}/api/profile/${id}/${action}`,
        {
          method: "PATCH",
        }
      );
      const data = await response.json();

      if (data.success) {
        fetchProfiles(); // Refresh profiles after updating status
      } else {
        alert(data.message || "Failed to update profile status.");
      }
    } catch (err) {
      console.error("Error updating profile status:", err);
    }
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
    if (filter === "All") {
      setFilteredProfiles(profiles);
    } else {
      setFilteredProfiles(
        profiles.filter((profile) => profile.profileStatus.toLowerCase() === filter.toLowerCase())
      );
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  if (loading) return <p>Loading profiles...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="manage-profiles">
      <h2>Manage Profiles</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {statuses.map((status) => (
          <button key={status} onClick={() => handleFilterChange(status)}>
            {status}
          </button>
        ))}
      </div>

      {filteredProfiles.length === 0 ? (
        <p>No profiles found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProfiles.map((profile) => (
              <tr key={profile._id}>
                <td>{profile.name}</td>
                <td>{profile.email}</td>
                <td>{profile.profileStatus}</td>
                <td>
                  <button onClick={() => handleUpdateStatus(profile._id, "confirm")}>Confirm</button>
                  <button onClick={() => handleUpdateStatus(profile._id, "reject")}>Reject</button>
                  <button onClick={() => handleDelete(profile._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageProfiles;
