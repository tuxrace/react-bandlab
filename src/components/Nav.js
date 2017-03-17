import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

const Nav = () => (
  <div role="nav">
    <Link to="/"> Posts </Link> | 
    <Link to="/audios"> Audios </Link>
  </div>
)

export default Nav
