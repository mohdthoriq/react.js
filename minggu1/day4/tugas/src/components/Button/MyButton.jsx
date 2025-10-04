import styles from './Button.module.css'

function Button({ type, children, onClick }) {
  const buttonStyle = `${styles.button} ${type === 'primary' ? styles.primary : ''}`
  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;