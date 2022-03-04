import React from 'react'

export default function DragItems({boards}) {
  return (
    <div className=' container border border-danger d-flex justify-content-between p-2'>
      {boards.map((board) => (
        <div className='board col-5 border'>
          <div
            className='board-title border border-warning
            '>
            {board.title}
          </div>
          {board.items.map((item) => (
            <div className='col-12 border border-primary item mt-1'
            draggable={true}
            
            
            
            >
              {item.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
