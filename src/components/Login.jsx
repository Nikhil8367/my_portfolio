import React, { useState } from "react";
import Loader from "./Loader";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // ⏳ Ensure loader shows at least 2 seconds
      const delay = new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      const apiCall = fetch("http://localhost:5000/api/both", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          logger: 40,
        }),
      }).then((res) => res.json());

      // Wait for BOTH delay and API
      const [, data] = await Promise.all([delay, apiCall]);

      setMessage(data.message || "Login Successful ✅");
    } catch (err) {
      setMessage("Login Failed ❌");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <div style={styles.options}>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <span style={{ cursor: "pointer" }}>Forgot Password?</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={styles.button}
          >
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>

        {/* 👇 Loader shows below button */}
        

        {message && (
          <p style={{ marginTop: "15px" }}>{message}</p>
        )}
      </div>
      {loading && (
          <div style={{ marginTop: "20px" }}>
            <Loader />
          </div>
        )}
    </div>
    
  );
};

export default Login;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color: "white",
  },
  card: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    padding: "40px",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    background: "#4CAF50",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};