import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function Header() {
  return (
    <nav className='navTitle'>
      <Link to='/'>Scoop Installer</Link>
    </nav>
  );
}

export default Header;
