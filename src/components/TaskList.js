import React from 'react'
import useTasks from 'hooks/useTasks'

const TaskList = () => {
  const { tasks, deleteTask, updateTask } = useTasks()
  return (
    <ul className="task-list">
      {tasks.map(({ id, title, done }) => (
        <li key={id} className="task-item">
          <span
            className={`task-title ${done ? 'done' : ''}`}
            onClick={() => updateTask(id)}
          >
            {title}
          </span>
          <button className="delete" onClick={() => deleteTask(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
