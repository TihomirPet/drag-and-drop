import React from 'react'
import Draggable from 'react-draggable';
export default function TaskItem({list}) {
  return (
    <div>
      {list.map((listitem) => {
        return (
          <div className='container-fluid border border-primary p-2'>
            <Draggable>
              <div className='border col-5 p-2 mt-2'>
                assigneeName {listitem.assigneeName}
              </div>
            </Draggable>
            <Draggable>
              <div className='border col-5 p-2 mt-2'>
                completed_at {listitem.completed_at}
              </div>
            </Draggable>
            <Draggable>
              <div className='border col-5 p-2 mt-2'>
                completed_calendarweek {listitem.completed_calendarweek}
              </div>
            </Draggable>
            <Draggable>
              <div className='border col-5 p-2 mt-2'>
                completed_date {listitem.completed_date}
              </div>
            </Draggable>
          </div>
        );
      })}
    </div>
  );
}
