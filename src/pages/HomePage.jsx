
import React, { useEffect } from 'react'
import MyInput from '../components/MyInput/MyInput';
import Result from '../components/Result/Result';
import styles from './HomePage.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const HomePage = (props) => {
  const {
    inputValue,
    inputChangeHandler,
    checkElements,
    isEndGame,
    isWinner,
    restart
  } = props;

  useEffect(() => {
    Aos.init({duration: 2000});
  },[])

  return (
    <div className={styles.homePage}>
      <h1 
        data-aos="fade-up" 
        data-aos-delay='1000'
        className={styles.homePage__title}
      >Guess a 4-digit number</h1>
      <MyInput disabled={isEndGame || isWinner} value={inputValue} onChange={inputChangeHandler}/>
      <Result restart={restart} isWinner={isWinner} checkElements={checkElements} isEndGame={isEndGame}/>
    </div>
  );
}
export default HomePage;
