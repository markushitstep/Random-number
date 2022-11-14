
import { CONST_ACTIONS } from "./commonAction";

let initialState = {
  userNumbers: [],
  isWinner: false,
  isEndGame: false
};

const commonReducer = (state = initialState, action) => {

  switch (action.type) {
    case CONST_ACTIONS.SET_USER_NUMBERS:{
      return{
        ...state,
        userNumbers: action.payload
      }
    }
    case CONST_ACTIONS.SET_IS_WINNER:{
      return{
        ...state,
        isWinner: action.payload
      }
    } 
    case CONST_ACTIONS.SET_COUNT_ATTEMPTS:{
      return{
        ...state,
        countAttempts: action.payload
      }
    }
    case CONST_ACTIONS.SET_IS_END_GAME:{
      return{
        ...state,
        isEndGame: action.payload
      }
    }
    default: return state;
  }
}

export default commonReducer;