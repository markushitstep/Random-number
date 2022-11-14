export const CONST_ACTIONS = {
  SET_USER_NUMBERS: 'SET_USER_NUMBERS',
  SET_IS_WINNER: 'SET_IS_WINNER',
  SET_IS_END_GAME: 'SET_IS_END_GAME',
}

export const setUserNumbers = (payload) => ({ 
  type: CONST_ACTIONS.SET_USER_NUMBERS, payload 
});
export const setIsWinner = (payload) => ({ 
  type: CONST_ACTIONS.SET_IS_WINNER, payload 
});
export const setIsEndGame = (payload) => ({ 
  type: CONST_ACTIONS.SET_IS_END_GAME, payload 
});