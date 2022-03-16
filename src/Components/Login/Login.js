import React from "react";
import "./Login.css";
import "animate.css";

function Login() {
  return (
    <div className="container animate__animated animate__fadeInRight">
      <div className="row">
        <div className="col-lg-3 col-md-2" />
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true" />
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
      <h1 class="animate__animated animate__fadeInLeft">An animated element</h1>
    </div>
  );
}

export default Login;
