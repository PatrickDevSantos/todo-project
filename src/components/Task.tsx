import { Trash } from 'phosphor-react';
import styles from './Task.module.css'

export interface ITask {
  id: string;
  description: string;
  status: boolean;
}

interface Props {
  task: ITask;
  onTaskDone: (task: string) => void;
  onTaskDelete: (task: string) => void;
}

export function Task({ task, onTaskDone, onTaskDelete }: Props) {

  function handleTaskDone(taskId: string) {
    onTaskDone(taskId)
  }

  function handleDeleteTask(taskId: string) {
    onTaskDelete(taskId)
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkbox}>
        <label className={styles.container}>
          <input type="checkbox" checked={task.status} onChange={() => handleTaskDone(task.id)} />
          <span className={styles.checkmark}></span>
        </label>
      </div>
      <span className={task.status ? styles.done : styles.undone}>{task.description}</span>
      <button>
        <Trash size={24} onClick={() => handleDeleteTask(task.id)} />
      </button>
    </div>
  )
}