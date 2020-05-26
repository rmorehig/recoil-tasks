import React, { useState } from 'react'
import useTasks from 'hooks/useTasks'

const TaskInput = () => {
  const { addTask } = useTasks()
  const [value, setValue] = useState('')
  const handleSubmit = event => {
    if (event.keyCode === 13) {
      addTask(value)
      setValue('')
    }
  }
  return (
    <input
      placeholder="Enter a new task"
      value={value}
      onChange={event => setValue(event.target.value)}
      onKeyDown={handleSubmit}
    />
  )
}

export default TaskInput
