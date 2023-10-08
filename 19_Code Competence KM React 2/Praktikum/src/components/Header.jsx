import React, { useEffect, useState } from 'react';


function Header({ scrollValue }) {
    const headerStyle = {
      top: `${scrollValue * 0.5}px`,
    };
  
    return (
      <header>
      <a href="#" class="logo">Sunset</a>
      <ul>
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </header>
  );
}

export default Header;
