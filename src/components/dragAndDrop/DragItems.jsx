import React, { useState } from 'react';

export default function DragItems() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'group1',
      items: [
        { id: 1, title: '1' },
        { id: 2, title: '2' },
        { id: 3, title: '3' },
      ],
    }
    
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  // functions
  const dragOverHandler = (e) => {
    e.preventDefault();
    if ((e.target.className = 'item')) {
      e.target.style.boxShadow = '0 4px 3px gray';
    }
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = 'none';
  };

  const gragStartHandler = (e, board, item) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  };

  const gragEndHandler = (e) => {
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
  };
function dropCardHandler(e, board){
board.items.push(currentItem)
const currentIndex = currentBoard.items.indexOf(currentItem);
currentBoard.items.splice(currentIndex, 1);
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

};
 

  return (


    <div
      className='app container-fluid
 border d-flex p-3 justify-content-around'>
      {boards.map((board) => (
        <div
     
          className='board border border-danger col-5'
           onDragOver={(e) => dragOverHandler(e)}
           onDrop={(e) => dropCardHandler(e, board)}
          >



          <div className='board-title'>{board.title}</div>
          {board.items.map((item) => (
            <div
        key={item.id}
              className='item col-12'
              draggable={true}
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => gragStartHandler(e, board, item)}
              onDragEnd={(e) => gragEndHandler(e)}
              onDrop={(e) => dropHandler(e, board, item)}>
              {item.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
