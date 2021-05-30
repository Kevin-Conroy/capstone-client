import React from "react";
import {
  BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import SearchCity from "./SearchCity";

function NavBar() {
  return (
    <main className="App">
    <div>
      <NavLink to="./">Home</NavLink>&nbsp;
      <NavLink to="./profile">Profile</NavLink>&nbsp;
      <NavLink to="./searchcity">Search By City</NavLink>&nbsp;
      <NavLink to="./artistsearch">Artist Search</NavLink>&nbsp;
    </div>
    </main>
  );
}

export default NavBar;
