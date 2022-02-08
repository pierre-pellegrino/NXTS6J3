import React, {useContext} from 'react';
import darkContext from '../../darkContext';

const SwitchButton = () => {
  const dark = useContext(darkContext);
  const handleClick = () => {
    dark.toggle();
  }

  return (
    <label className="switch">
      <input defaultChecked={dark.isDark || null} onClick={handleClick} type="checkbox"/>
      <span className="slider round"></span>
  </label>
  );
};

export default SwitchButton;