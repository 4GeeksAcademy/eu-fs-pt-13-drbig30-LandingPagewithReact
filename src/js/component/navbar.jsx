import React from "react";
const Navbar = () => {
	return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className=" text-white navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className=" text-white nav-link active" aria-current="page" href="#">Home</a>
        <a className=" text-white nav-link" href="#">Features</a>
        <a className=" text-white nav-link" href="#">Pricing</a>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;