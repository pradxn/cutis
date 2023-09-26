import React from 'react';
import LoginButton from '../../elements/login/LoginButton';
import SebasAPI from '../../elements/api/SebasAPI';
import classes from './NavBar.module.css';

const NavLinks = (props) => {
  return (
    <div className={classes.NavLinks}>
      <ul>
        <li onClick={() => props.isMobile && props.closeMobileMenu}>
          <a href="/skin">Skin 😇</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu}>
          <a href="/hair">Hair 💈</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu}>
          <a href="/others">Others 🍀</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu}>
          <a href="/login"><LoginButton /></a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu}>
          <a href="/api-integration"><SebasAPI /></a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;