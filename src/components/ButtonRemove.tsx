import { Trash } from "@phosphor-icons/react";

import styles from "./ButtonRemove.module.css"

type ButtonRemoveProps = React.ComponentProps<"button"> & {
  onDeleteList: () => void
}

export function ButtonRemove({onDeleteList ,...rest}:ButtonRemoveProps) {
  return (
    <button
      className={styles.button}
      {...rest}
    >
      <Trash
        onClick={onDeleteList}
      />
    </button>
  )
}