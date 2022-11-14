import styles from './MyButton.module.css';

const MyButton = (props) => {
  const {
    children,
    onClick,
    disabled
  } = props;
  return (
    <button 
      className={styles.MyButton} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default MyButton;
