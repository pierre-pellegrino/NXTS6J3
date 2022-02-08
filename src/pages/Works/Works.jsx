import React, { useContext } from 'react';
import workData from '../../worksData';
import { Link, Outlet } from 'react-router-dom';
import darkContext from '../../darkContext';

const Works = () => {
  const dark = useContext(darkContext);
  return (
    <div className="section-wrapper">
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>
        Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.
      </p>

      <div className="works-list">
        {workData.map((client, i) => {
          return <Link className={`${dark.isDark ? 'dark-mode' : 'light-mode'}`} to={`${client.name.toLowerCase()}-study-case`} key={i}> {client.name} </Link>;
        })}
      </div>

      <Outlet />

    </div>
  );
};

export default Works;