import React from "react";
// import "./signup.scss";

function Signup() {
  return (
    <div className="div">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <form>
      <label>
        <input type="text" required />
        <div className="label-text">First name</div>
      </label>
      <label>
        <input type="text" required />
        <div className="label-text">Last name</div>
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Signup;
