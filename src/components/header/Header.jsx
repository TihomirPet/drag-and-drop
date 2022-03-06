import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header({text}) {
  return (
    <div>
      <h3>{text}</h3>

      <nav className='main-navigation'>
        <NavLink to='/' activeclassname='active'>
          Start
        </NavLink>

        <NavLink to='/barchart' activeclassname='active'>
          barchart
        </NavLink>
  
        <NavLink to='/dragList' activeclassname='active'>
          DragList
        </NavLink>
        <NavLink to='/draglistc' activeclassname='active'>
          draglistc
        </NavLink>
      </nav>
    </div>
  );
}

