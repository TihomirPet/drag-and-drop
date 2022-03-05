import React, { useState } from 'react';
import DragItems from './DragItems';

export default function DragList() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'group1',
      items: [
        { id: 1, title: '1' },
        { id: 2, title: '2' },
        { id: 3, title: '3' },
      ],
    },
    {
      id: 2,
      title: 'group2',
      items: [
 
      ],
    },
    {
      id: 3,
      title: 'group3',
      items: [
    
      ],
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrenItem] = useState(null);

  const dragOverHandler = (e) => {
    e.preventDefault();

    if (e.target.className == 'item') {
      e.target.style.boxShadow = '0 4px 4px black';
    }
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };

  const dragStartHandler = (e, board, item) => {
    setCurrentBoard(board);
    setCurrenItem(item);
  };

  const dragEndHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };

  const dropHandler = (e, board, item) => {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);

    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);

    setBoards(
      boards.map((b) => {
     
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }

        return b;
      })
    );
     e.stopPropagation();
  };




  const dropCardHandler=(e,board)=>{
   
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
   setBoards(
     boards.map((b) => {
    
       if (b.id === currentBoard.id) {
         return currentBoard;
       }

       return b;
     })
   );


  };

  return (
    <div className='container-fluid d-flex '>
      {boards.map((board) => (
        <div
  
          className='board  col-4 p-1 border border-warning'
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropCardHandler(e, board)}>
          <div className='board_title mb-5'>{board.title}</div>

          {board.items.map((item) => (
            <div
           
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e, board, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, board, item)}
              className='item'
              draggable={true}>
              {item.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
