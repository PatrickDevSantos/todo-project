import { useState } from 'react';

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { ITask, Task } from './components/Task';

import styles from './App.module.css'
import { ClipboardText } from 'phosphor-react';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  function handleAddNewTask() {
    if (newTaskText) {
      setTasks([...tasks, {
        id: new Date().getTime().toString(),
        description: newTaskText,
        status: false
      }])
      setNewTaskText('')
    }
  }

  function taskDone(taskId: string) {
    let updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        task.status = !task.status
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function deleteTask(taskId: string) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const tasksInfo = tasks.reduce((acc, task) => {
    if (task.status) acc.completedTasks += 1
    return acc
  }, {
    completedTasks: 0,
  })

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className='wrapper'>
        <div className={styles.inputGroup}>
          <Input value={newTaskText} onChange={e => setNewTaskText(e.target.value)} />
          <Button active={newTaskText.length > 0} onClick={handleAddNewTask} />
        </div>

        <div className={styles.taskList}>
          <div className={styles.taskListHeader}>
            <div className={styles.taskInfo}>
              <span>Tarefas criadas</span>
              <span>{tasks.length}</span>
            </div>
            <div className={styles.taskInfo}>
              <span>Concluídas</span>
              <span>{tasks.length == 0 ? 0 : `${tasksInfo.completedTasks} de ${tasks.length}`}</span>
            </div>
          </div>
          {tasks.length == 0 ?
            <div className={styles.taskListEmpty}>
              <ClipboardText size={56} color='#333' />
              <span><strong>Você ainda não possui tarefas cadastradas</strong></span>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
            : tasks.map(task => <Task key={task.id} task={task} onTaskDone={taskDone} onTaskDelete={deleteTask} />)
          }
        </div>
      </div>
    </div>
  )
}

export default App
