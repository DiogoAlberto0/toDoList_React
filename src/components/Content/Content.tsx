import styles from "./Content.module.css";

import { useState } from "react";

import { Task } from "../Task/Task";
import { ContentWithoutTask } from "./ContentWithoutTask";

interface TaskProps {
  id: number;
  content: string;
  finished: boolean;
}
interface ContentProps {
  tasks: TaskProps[];
  handleFinishTask: (taskId: number, checkBoxIsChecked: boolean) => void;
  handleDeleteTask: (taskId: number) => void;
}
const Content = ({
  tasks,
  handleFinishTask,
  handleDeleteTask,
}: ContentProps) => {
  const ContentValue = () => {
    if (tasks.length == 0) {
      return <ContentWithoutTask />;
    } else {
      return tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            finished={task.finished}
            onFinished={handleFinishTask}
            onDelete={handleDeleteTask}
          />
        );
      });
    }
  }
  return (
    <main className={styles.toDoContent}>
      <header>
        <div>
          <p>Tarefas criadas</p>
          <span onClick={() => console.log(tasks)}>{tasks.length}</span>
        </div>
        <div>
          <p>Tarefas concluidas</p>
          <span>{`${tasks.filter((task) => task.finished == true).length} de ${
            tasks.length
          }`}</span>
        </div>
      </header>
      <aside>
        {ContentValue()}
      </aside>
    </main>
  );
};

export { Content };
