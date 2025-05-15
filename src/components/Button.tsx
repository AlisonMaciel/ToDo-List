import {PlusCircle} from "@phosphor-icons/react"

import styles from "./Button.module.css"

type ButtonProps = React.ComponentProps<"button"> & {}

export function Button({...rest}: ButtonProps) {
  return (
    <button 
      className={styles.button}
      {...rest}
    >
      Criar
      <PlusCircle/>
    </button>
  )
}

