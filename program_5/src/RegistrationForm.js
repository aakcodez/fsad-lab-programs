import React from "react";

class RegistrationForm extends React.Component {
  state = { name: "", email: "", password: "", errors: {} };

  validate = () => {
    const errors = {};
    if (this.state.name.length < 3) errors.name = "Name must be 3+ chars";
    if (!/^\S+@\S+\.\S+$/.test(this.state.email)) errors.email = "Invalid email";
    if (this.state.password.length < 8) errors.password = "Password must be 8+ chars";

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      alert("Form submitted!");
      this.setState({ name: "", email: "", password: "", errors: {} });
    }
  };

  render() {
    const { name, email, password, errors } = this.state;
    return (
      <div style={{ border: "2px solid blue", padding: "20px", margin: "20px", width: "fit-content" }}>
        <h2 style={{ fontSize: "24px", marginTop: 0 }}>Registration form for USER Input:</h2>

        <form onSubmit={this.handleSubmit} style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
          {/* Name Field */}
          <div>
            <input
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              style={{ padding: "8px 12px", fontSize: "16px", width: "180px" }}
            />
            <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>{errors.name}</div>
          </div>

          {/* Email Field */}
          <div>
            <input
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              style={{ padding: "8px 12px", fontSize: "16px", width: "180px" }}
            />
            <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>{errors.email}</div>
          </div>

          {/* Password Field */}
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              style={{ padding: "8px 12px", fontSize: "16px", width: "180px" }}
            />
            <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>{errors.password}</div>
          </div>

          {/* Register Button */}
          <button type="submit" style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;