import React, { useState } from "react";
import logo from '../android-chrome-256x256.png';
import"./Logo.css";


  function Logo(){
  return (
    <div className="Logo">   
        <img  src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;