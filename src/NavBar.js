import React, { Component }  from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav navbar navbar-expand-sm bg-white">
        <Logo />
        <NavLinks />
      </nav>
    )
  }
}

class Logo extends Component {
  render() {
    return (
      <span className="navbar-brandL">
        <span className="logo" aria-hidden="true"></span>
          <span class="zillow">Zillow</span>
        </span>
    )
  }
}

class NavLinks extends Component {
  render() {
    return (
      <div className="nav-links ml-auto">
        <ul>
        <span>
            <a className="nav-link">Louis Ta</a>
          </span>
          <span>
            <a className="nav-link">|</a>
          </span>
          <span>
          <NavLink to="/Final" className="nav-link" activeClassName="activeLink">Final Suggestion</NavLink>
          </span>
          <span>
            <NavLink to="/PlanB" className="nav-link" activeClassName="activeLink">Plan B</NavLink>
          </span>
          <span>
            <NavLink to="/PlanA" className="nav-link" activeClassName="activeLink">Plan A</NavLink>
          </span>
          <span>
            <NavLink to="/Main" className="nav-link" activeClassName="activeLink">Introduction</NavLink>
          </span>
        </ul>
      </div>
    )
  }
}
