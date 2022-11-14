
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsEndGame, setIsWinner, setUserNumbers } from '../redux/common/commonAction';
import HomePage from './HomePage'

const HomePageContainer = () => {
  const { 
    userNumbers,
    isWinner,
    isEndGame,
  } = useSelector(state => state.common)
  const dispatch = useDispatch();

  const MAX_INPUT_LENGTH = 4;

  const [randomNumbers, setRandomNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [checkElements, setCheckElements] = useState([]);

  const inputChangeHandler = (event) => {
    let value = event.target.value;
    if(value.length <= MAX_INPUT_LENGTH){
      const onlyNums = value.replace(/[^0-9]/g, '');
      setInputValue(onlyNums)
    }
  }

  const checkMatchesUserNumbers = () => {
    let elements = [];
    let countMatch = 0;

    if(!isEndGame){
      userNumbers.forEach((number, index) => {
        if(number == randomNumbers[index]){
          elements.push(<p key={index}>You guessed number: {number}</p>)
          countMatch++;
        }else {
          elements.push(<p key={index}>You dont guessed number: {number}</p>)
        }
      });

      console.log(elements);      
      setCheckElements(elements);
      if(countMatch === MAX_INPUT_LENGTH) {
        dispatch(setIsWinner(true));
        dispatch(setIsEndGame(true));
      }
      if(userNumbers.length === MAX_INPUT_LENGTH && countMatch < MAX_INPUT_LENGTH){
        dispatch(setIsWinner(false));
        dispatch(setIsEndGame(true));
      }
    }
  }

  const restart = () => {
    dispatch(setIsEndGame(false));
    dispatch(setIsWinner(false))
    dispatch(setUserNumbers([]));
    setCheckElements([]);
    setInputValue('');
    seed();
  }

  const seed = () => {
    let newRandomNumbers = Math.random().toString().slice(2, 6);
    console.log(newRandomNumbers.split(''));
    setRandomNumbers(newRandomNumbers.split(''));
  }

  useEffect(() => {
    seed();
  },[]);

  useEffect(() => {
    let newUserNumbers = inputValue.split('');
    dispatch(setUserNumbers(newUserNumbers));
    if(inputValue === ''){
      setCheckElements([]);
    }
  },[inputValue, dispatch]);

  useEffect(() => {
    userNumbers.length > 0  && checkMatchesUserNumbers();
  },[userNumbers]);
  
  return (
    <HomePage 
      inputValue={inputValue}
      inputChangeHandler={inputChangeHandler}
      checkMatchesUserNumbers={checkMatchesUserNumbers}
      checkElements={checkElements}
      isEndGame={isEndGame}
      isWinner={isWinner}
      restart={restart}
    />
  );
}
export default HomePageContainer;

