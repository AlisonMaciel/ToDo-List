import { Check } from "@phosphor-icons/react"

import { useState } from "react"

import styles from "./ButtonCheck.module.css"

type ButtonCheckProps = React.ComponentProps<"button"> & {
  onCheck: () => void,
}

export function ButtonCheck( {onCheck, ...rest}: ButtonCheckProps ) {
  const [check, setCheck] = useState<boolean>(false)

  function handleCheck() {
    setCheck(!check)
    onCheck()
  }

  return (
    <button 
      className={check ? styles.check : styles.button}
      onClick={handleCheck}
      disabled={check}
    {...rest}>
      {check && <Check/>}
    </button>
  )
}