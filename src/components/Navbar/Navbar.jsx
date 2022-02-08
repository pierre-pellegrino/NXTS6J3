import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import SwitchButton from '../SwitchButton/SwitchButton';
import darkContext from '../../darkContext';

const Navbar = () => {
  const dark = useContext(darkContext);

  return (
    <nav className="navbar-wrapper">
      <h2> <Link to="/">The Hacking Agency </Link> </h2>
      <Link className={`${dark.isDark ? 'dark-mode' : 'light-mode'}`} to="/">Accueil</Link>
      <Link className={`${dark.isDark ? 'dark-mode' : 'light-mode'}`} to="/about">Notre agence</Link>
      <Link className={`${dark.isDark ? 'dark-mode' : 'light-mode'}`} to="/works">Nos travaux</Link>
      <SwitchButton />
    </nav>
  );
};

export default Navbar;

