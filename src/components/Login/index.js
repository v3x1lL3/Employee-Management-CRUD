import React, { useState } from "react";
import Swal from "sweetalert2";

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = "pierogi@example.com";
  const adminPassword = "p!3r0g1@2077";

  const [email, setEmail] = useState("pierogi@example.com");
  const [password, setPassword] = useState("p!3r0g1@2077");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem("is_authenticated", true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: "success",
            title: "You have logged in!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Email or password is incorrect.",
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <div className="small-container">
      <form onSubmit={handleLogin}>
        <h1 style={{ color: "orange" }}>
          <i>Login as Admin</i>
        </h1>
        <label htmlFor="email" style={{ color: "blue" }}>
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="pierogi@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" style={{ color: "blue" }}>
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="p!3r0g1@2077"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input style={{ marginTop: "12px" }} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
