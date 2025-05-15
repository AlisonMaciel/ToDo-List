import styles from "./Header.module.css"

import toDo from "../assets/todo.svg"

export function Header() {
  return (
    <div className={styles.header}>
      <img 
        src={toDo}
        alt="ToDo" 
      />
    </div>
  )
}