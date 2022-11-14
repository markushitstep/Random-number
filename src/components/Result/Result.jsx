import MyButton from "../MyButton/MyButton";
import styles from "./Result.module.css";

const Result = (props) => {
  const {
    checkElements,
    isEndGame,
    isWinner,
    restart
  } = props;

  return (
    <div className={styles.result}>
      { checkElements
        && <div className={styles.result__matches}>{checkElements}</div>
      }
      {(isEndGame && !isWinner) 
        && <p className={styles.result__loose}>{" You loose =( "}</p>
      }
      {isWinner
        && <p className={styles.result__won}>{" You won =) "}</p>
      }
      {(isEndGame || isWinner) 
        && <MyButton onClick={restart}>Restart</MyButton>
      }
    </div>
  )
}

export default Result;
