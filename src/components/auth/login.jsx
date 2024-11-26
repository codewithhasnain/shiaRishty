import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login successful.");
      navigate("/", { replace: true });
      window.location.reload();
    } catch (error) {
      console.error("Error:", error.message);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button className="submit-button" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <div className="form-footer">
            <Link to="/forgot-password">Forgot Password?</Link>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
