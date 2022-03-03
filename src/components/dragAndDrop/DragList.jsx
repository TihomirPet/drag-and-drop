import React from 'react'
import DragItems from './DragItems'

export default function DragList() {


    const boards = [
      {
        title: 'group1',
        items: [{ title: '1' }, { title: '2' }, { title: '3' }],
      },
      {
        title: 'group2',
        items: [{ title: '4' }, { title: '5' }, { title: '6' }],
      },
    ];
  return (

        <DragItems boards={boards}/>
  
  )
}
