import React from 'react'

export default function TaskItem({list}) {
  return (
    <div>
      {list.map((listitem) => (
        <div
          className='border border-danger container
        mt-5 p-2'>
          <div className='border col-5 p-2 mt-2'>
            assigneeName {listitem.assigneeName}
          </div>
          <div className='border col-5 p-2 mt-2'>
            completed_at {listitem.completed_at}
          </div>
          <div className='border col-5 p-2 mt-2'>
            completed_calendarweek {listitem.completed_calendarweek}
          </div>
          <div className='border col-5 p-2 mt-2'>
            completed_date {listitem.completed_date}
          </div>
        </div>
      ))}
    </div>
  );
}
