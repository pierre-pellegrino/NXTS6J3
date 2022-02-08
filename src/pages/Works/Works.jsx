import React, { useContext } from 'react';
import workData from '../../worksData';
import { Link, Outlet } from 'react-router-dom';
import darkContext from '../../darkContext';
import workContext from '../../displayWorkContext';

const Works = () => {
  const dark = useContext(darkContext);
  const workDisplay = useContext(workContext);
  return (
    <div className="section-wrapper anim">
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>
        Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.
      </p>
      <p onClick={workDisplay.toggle} className="settings-icon"><i className="fas fa-sliders-h"></i></p>

      <div className="works-list">
        {workData.map((client, i) => {
          if (!workDisplay.isRegular) return <Link className={`${dark.isDark ? 'dark-mode' : 'light-mode'}`} to={`${client.name.toLowerCase()}-study-case`} key={i}> {client.name} </Link>;
          if (workDisplay.isRegular) return <div className={`work-card ${dark.isDark ? 'dark-mode' : 'light-mode'}`}>
              <Link 
                className={`${dark.isDark ? 'dark-mode' : 'light-mode'}`} 
                to={`${client.name.toLowerCase()}-study-case`} key={i}> 
                {client.name} 
              </Link>
              <p>{client.title}</p>
            </div>;
        })}
      </div>

      <Outlet />

    </div>
  );
};

export default Works;