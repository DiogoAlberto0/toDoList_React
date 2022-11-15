import styles from './Header.module.css'

import toDoLogo from '../../assets/LogotoDoLogo.svg'
import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'

interface HeaderProps {
    handleCreateTask: (content: string) => void
}
const Header = ({handleCreateTask}:HeaderProps) => {

    const [ newTask, setNewTask ] = useState('')

    return (
        <header className={styles.toDoMenu}>
            <div>
                <img src={toDoLogo} alt="logo" />
            </div>
            
            <form onSubmit={(event) => {
                event.preventDefault()
                handleCreateTask(newTask)
            }}>
                <input 
                    type="text" 
                    name="addTask" 
                    placeholder="Adicione uma nova tarefa"
                    onChange={(event) => setNewTask(event.target.value)}
                />

                <button type='submit'>
                    <div>
                        Criar
                        <PlusCircle weight="bold" size="16px"/>
                    </div>
                </button>
            </form>
        </header>
    )
}

export { Header }