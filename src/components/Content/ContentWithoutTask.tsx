import styles from './Content.module.css'

import Clipboard from "../../assets/Clipboard.svg";

const ContentWithoutTask = () => {
    return (
      <div className={styles.contentWithoutTask}>
        <img src={Clipboard} alt="" />
        <h1>Você ainda não tem tarefas cadastradas</h1>
        <h2>Crie tarefas e organize seus itens a fazer</h2>
      </div>
    );
};

export { ContentWithoutTask }