import styles from "./Input.module.css"

type InputProps = React.ComponentProps<"input"> & {
  type: string
}

export function Input({type, ...rest}: InputProps) {
  return (
    <input
    className={styles.input} 
    type={type} 
    {...rest}
    />
  )
}