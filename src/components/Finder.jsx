import React from 'react';
import BarChart from './chart/BarChart';
import Drag from './chart/draggableelement/Drag';
import DragListC from './dragAndDrop copy/DragListC';
import DragList from './dragAndDrop/DragList';
import Header from './header/Header';
import TaskList from './task/TaskList';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Finder() {
  return (
    <>

      {/* <DragList /> */}
      {/* <TaskList /> */}
      {/* <BarChart/> */}

      {/* <DragListC/> */}

      {/* <Drag /> */}

      <Router>
        <Header text='APP - TITLE' />

        <div className='container-fluid'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                
                  <TaskList />
                </>
              }></Route>

            <Route path='/draglist' element={<DragList />} />
            <Route path='/barchart/*' element={<BarChart />} />
            <Route path='/drag/*' element={<Drag />} />
            <Route path='/draglist/*' element={<DragList />} />
            <Route path='/draglistc/*' element={<DragListC />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
