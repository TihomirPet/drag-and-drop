import React from 'react'

export default function Tasklist({ listTasks }) {
  return (
    <div
      className='container-fluid border border-danger f-flex

    '>
      {listTasks.map((listTasks) => (
        <div className='col-5 border border-primary mt-5 p-2'>
          <div className='col-12 border p-1'>
            <p>assigneeName</p>
            {listTasks.assigneeName}
          </div>
          <div className='col-12 border p-1'>
            <p>completed</p>
            {listTasks.completed}
          </div>
          <div className='col-12 border p-1'>
            <p>completed_at</p>
            {listTasks.completed_at}
          </div>
          <div className='col-12 border p-1'>
            <p>completed_calendarweek</p>
            {listTasks.completed_calendarweek}
          </div>
        </div>
      ))}
    </div>
  );
}
