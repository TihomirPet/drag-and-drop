import React, { useState } from 'react'
import TaskItem from './TaskItem'
import db from '../../db'

export default function TaskList() {
  const [list, setList] = useState(db);
  return (
   <TaskItem list={list}/>
  )
}
