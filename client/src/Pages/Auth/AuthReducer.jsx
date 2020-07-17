import * as ACTION_TYPES from '../../Configs/ActionTypes'
import {parseJwt} from "./AuthHelpers";

let user = {
  id: 0,
  username: ''
}
const token = localStorage.getItem('token')
if (token) {
  const jwtInfo = parseJwt(token);
  user = jwtInfo.user ? jwtInfo.user : {}
}

const initialState = {
  user: user,
  isAuthenticated: user.id ? !!localStorage.getItem("token") : false,
  profile: null
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      }
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false
      }
    case ACTION_TYPES.LOGOUT_SUCCESS:
      return {...state, isAuthenticated: false};
    case ACTION_TYPES.LOGOUT_FAILURE:
      return {...state, isAuthenticated: false};
    case ACTION_TYPES.VERIFY_USER:
      return {...state, user: {}};
    case ACTION_TYPES.SET_USER:
      return {...state, user: action.payload};
    default:
      return state
  }
};

export default AuthReducer;