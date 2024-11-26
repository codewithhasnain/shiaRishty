import React, { useState } from "react";
import "../../styles/contact.css";

const Contact = () => {
  // State for form inputs and feedback messages
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      // Make API request to submit the contact form
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit contact form");
      }

      setFeedback("Your message has been sent successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error.message);
      setFeedback("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have a question? Simply complete the contact form on this page or email
        us at: <a href="mailto:ask@ShiaRishty.org">ask@ShiaRishty.org</a>
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="name-fields">
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email (required)</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message (required)</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="send-button" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {feedback && <p className="feedback-message">{feedback}</p>}
    </div>
  );
};

export default Contact;
