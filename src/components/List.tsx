import { useState } from 'react'
import { ButtonCheck } from './ButtonCheck'
import { ButtonRemove } from './ButtonRemove'

import styles from "./List.module.css"

type ListProps = {
  children: string,
  onDeleteList: () => void,
  onCompleted: () => void,
  onDecrementOne: () => void
}

export function List({onDecrementOne, onCompleted, onDeleteList ,children}:ListProps) {
  const [completed, setCompleted] = useState<boolean>(false)

  function handleCompleted() {
    setCompleted(!completed)
    onCompleted()
  }

  function handleDelete() {
    onDecrementOne()
    onDeleteList()
  }

  return (
    <div className={completed ? styles.completed : styles.list}>
      <ButtonCheck
        onCheck={handleCompleted}
      />
      <div className={styles.text}>
        {children}
      </div>
      <ButtonRemove
        onDeleteList={handleDelete}
      />
    </div>
  )
}