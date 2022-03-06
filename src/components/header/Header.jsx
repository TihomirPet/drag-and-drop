import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header({text}) {
  return (
    <div className='container-fluid mb-3'>
      <h3 className='mt-5 mb-4'>{text}</h3>

      <nav className='main-navigation'>
        <NavLink to='/' activeclassname='active' className='text-white btn'>
          Start
        </NavLink>

        <NavLink
          className='text-white btn'
          to='/barchart'
          activeclassname='active'>
          Barchart
        </NavLink>

        <NavLink
          className='text-white btn'
          to='/dragList'
          activeclassname='active'>
          DragList
        </NavLink>
        <NavLink
          to='/draglistc'
          activeclassname='active'
          className='text-white btn'>
          Draglistc
        </NavLink>
      </nav>
    </div>
  );
}

