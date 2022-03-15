import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-3 col-md-2" />
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa-light fa-lock-open" aria-hidden="true" />
          </div>
          <div className="col-lg-12 login-title">ADMIN LOGIN</div>
          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form autoComplete="off">
                <div className="form-group">
                  <label className="form-control-label">EMAIL ID</label>
                  <input
                    type="text"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text">
                    {/* Error Message */}
                  </div>
                  <div className="col-lg-6 login-btm login-button">
                    <button type="submit" className="btn btn-outline-primary">
                      LOGIN
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2" />
        </div>
      </div>
    </div>
  );
}

export default Login;
