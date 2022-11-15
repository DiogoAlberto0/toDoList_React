import './App.css'

//components
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import { FormEvent, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      finished: false,
    },
    {
      id: 2,
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      finished: false,
    },
  ]);

  const createTask = (content:string ) => {
    const taskList = [...tasks]

    taskList.push({
      id: taskList.length + 1, 
      content, 
      finished: false
    })

    setTasks(taskList)
  }

  const finishTask = (taskId: number, checkBoxIsChecked: boolean) => {
    setTasks(([...state]) => {
    
      state.map(task => {
          if(task.id == taskId) {
            task.finished = checkBoxIsChecked
          }
        return task
      })
      console.log(state)
      return state
    });
  };
  const deleteTask = (taskId: number) => {
    const tasksWithoutDeleted = tasks.filter(task => task.id !== taskId)

    setTasks(tasksWithoutDeleted)
  }
  return (
    <div className="App">
      <Header handleCreateTask={createTask}/>
      <Content 
        tasks={tasks}
        handleFinishTask={finishTask}
        handleDeleteTask={deleteTask}
      />
    </div>
  )
}

export default App
