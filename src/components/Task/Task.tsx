import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  id: number,
  content: string,
  finished: boolean,
  onFinished: (id: number, onChecked: boolean) => void,
  onDelete: (id: number) => void
}
const Task = ({id, content, finished, onFinished, onDelete }: TaskProps) => {
  return (
    <div className={styles.toDoTask}>
      <label className={styles.checkBox}>
        <input type="checkbox" onChange={event => onFinished(id, event.target.checked)}/>
        <span className={styles.checkmark}></span>
      </label>
      <p className={finished ? styles.taskFinished : ''}>
        {content}
      </p>
      <button onClick={() => onDelete(id)}>
        <Trash></Trash>
      </button>
    </div>
  );
};

export { Task };  
export type { TaskProps };

