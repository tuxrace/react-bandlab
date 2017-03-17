import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

const Nav = () => (
  <div role="nav">
    <Link to="/react-bandlab"> Posts </Link> | 
    <Link to="/react-bandlab/audios"> Audios </Link>
  </div>
)

export default Nav
