import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';
import logoImage from '../image/logo.png'; // Replace with the actual path to your logo image

const Navbar = () => {
  return (
    <>
      <Nav style={{ paddingLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logoImage}
            alt="Logo"
            style={{
              height: '100px', // Adjust the height as needed
              width: 'auto', // Maintain aspect ratio
              marginRight: '10px', // Optional: Add some right margin for spacing
            }}
          />
          <span style={{ color: 'white', fontSize: '2em' }}>Navigator</span>
        </div>
        <Bars />

        <NavMenu>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/maps">Maps</NavLink>
          <NavLink to="/blockers">Blockers</NavLink>
          <NavLink to="/guide">Guide</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
