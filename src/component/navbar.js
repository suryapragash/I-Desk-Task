import React from "react";

function Navbar() {
  return (
    <div className="container-fluid bg-white position-sticky fixed-top">
      <div className="container">
        <div className="row 3  ">
          <div className="col-md-4 text-left col-sm text-center my-3 ">
            <h5 className="font-weight-bold text-center">INSTAGRAM</h5>
          </div>
          <div className="col-md-4 text-center col-sm d-none d-md-block text-center my-3">
            <input
              className="rounded pl-2 position-relative border-light"
              placeholder="       search"
            />
            <i class="fas fa-search position-absolute post"></i>
          </div>
          <div className="col-md-4 text-right col-sm text-center my-3 ">
            <button className="rounded mx-4 py-2 px-3 bg-primary text-white border-0">
              Log in
            </button>
            <button className="rounded border-0 bg-transparent text-primary ">
              sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
