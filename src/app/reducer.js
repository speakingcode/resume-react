export const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'USER_LOGGED_IN':
      return {
        ...state,
        currentUser: payload.user
      }
    case 'LOGOUT':
      return {
        ...state,
        currentUser: null
      }
    default:
      return state
  }
}

export default reducer
