import React from 'react'
import TaskList from 'components/TaskList'
import Header from 'components/Header'
import TaskInput from 'components/TaskInput'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <TaskInput />
        <TaskList />
      </main>
    </div>
  )
}

export default App
