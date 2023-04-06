const parent = React.createElement(
  "div",
  { className: "container" },
  React.createElement(
    "div",
    { className: "main" },
    React.createElement("h1", { className: "headding" }, "Login Page"),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement("label", { className: "form-label" }, "Email"),
      React.createElement("input", {
        type: "email",
        className: "form-input",
      })
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement("label", { className: "form-label" }, "Password"),
      React.createElement("input", {
        type: "password",
        className: "form-input",
      })
    ),
    React.createElement("button", { className: "btn-login" }, "Login")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
