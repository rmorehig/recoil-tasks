import { atom, useRecoilState } from 'recoil'
const taskState = atom({
  key: 'taskState',
  default: [
    { id: 1, title: 'Wash clothes', done: false },
    { id: 2, title: 'Clean bedroom', done: false },
    { id: 3, title: 'Go shopping', done: false },
  ],
})

export default function useTasks() {
  const [tasks, setTasks] = useRecoilState(taskState)
  const addTask = newTask => {
    setTasks(previousTasks => [
      ...previousTasks,
      { id: previousTasks.length + 1, title: newTask, done: false },
    ])
  }
  const deleteTask = id => {
    setTasks(previousTasks => previousTasks.filter(task => task.id !== id))
  }
  const updateTask = id => {
    const index = tasks.findIndex(task => task.id === id)
    if (index !== -1) {
      setTasks(previousTasks => [
        ...previousTasks.slice(0, index),
        {
          ...previousTasks[index],
          done: !previousTasks[index].done,
        },
        ...previousTasks.slice(index + 1),
      ])
    }
  }
  return { tasks, addTask, deleteTask, updateTask }
}
