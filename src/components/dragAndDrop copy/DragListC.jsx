import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import _ from 'lodash';
import { Droppable } from 'react-beautiful-dnd';

import { v4 } from 'uuid';
import { Draggable } from 'react-beautiful-dnd';

export default function DragListC() {
  const item = {
    id: v4(),
    name: 'Test 1 ',
  };

  const item2 = {
    id: v4(),
    name: 'Test 2 ',
  };

  console.log(item);
    const [text, setText] = useState('');
  const [state, setState] = useState({
    todo: { title: 'Monday', items: [item, item2] },
    inProgresss: { title: 'Tuesday', items: [] },
    done: { title: 'Wednesday', items: [] },
  });

  // get destination and source
  const handleDragEnd = ({ destination, source }) => {
    console.log('from', source);
    console.log('to', destination);

    if (!destination) {
      //  console.log(' not dropped in droppable');
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      //  console.log('  dropped in same place');
      return;
    }
    // console.log(data);

    // coppy item
    const itemCoppy = { ...state[source.droppableId].items[source.index] };
    setState((prev) => {
      // coppy prevStata
      prev = { ...prev };
      // remove from prev item "itemCoppy" array
      prev[source.droppableId].items.splice(source.index, 1);
      // add to new items array location
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCoppy
      );

      return prev;
    });
  };




  // add task
  const addItem = () => {
    setState((prev) => {
      return {
        ...prev,
        todo: {
          title: 'Todo',
          items: [
            {
              id: v4(),
              name: text,
            },
            ...prev.todo.items,
          ],
        },
      };
    });

    setText('');
  };

  return (
    <>
      <div>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div className='container-fluid d-flex border border-danger '>
        <DragDropContext onDragEnd={handleDragEnd}>
          {_.map(state, (data, key) => {
            return (
              <div key={key} className='col-4 border p-2'>
                <h4>{data.title}</h4>
                {/* droppableId key === item :todo:inProgress:done */}
                <Droppable droppableId={key}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className='droppable-col border border-primary p-1'>
                        {data.items.map((el, index) => {
                          return (
                            <Draggable
                              key={el.id}
                              // index == items in data [state]
                              index={index}
                              draggableId={el.id}>
                              {(provided, snapshot) => {
                                console.log(snapshot);
                                return (
                                  <div
                                    className={`item ${
                                      snapshot.isDragging && 'dragging'
                                    }`}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}>
                                    {el.name}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}

                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </>
  );
}
