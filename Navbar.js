import React, { Component } from 'react'
import  { Link } from 'react-router-dom';

 class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand text-white" to="/home"> <h1>IndiaToday</h1>  </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/general">General</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link text-white" to="Education">Education</Link>
        </li> */}
        <li class="nav-item">
          <Link class="nav-link text-white" to="Health">Health</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="Sports">sports</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="Entertainment">Entertainment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="Technology">Technology</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="Business">Business</Link>
        </li>
        
        
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
