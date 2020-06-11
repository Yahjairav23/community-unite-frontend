import { combineReducers } from "redux"

// const initialState = {
//     currentUser: null
// }

// this reducer handles any dispatch actions pertaining to userType
const userTypeReducer = (oldState = null, action) => {
  let newState
// debugger  
  switch(action.type){
    case "SET_USER_TYPE":
      newState = action.payload
      return newState
    default:
      return oldState
  }  
}

// this reducer will take care of any dispatch actions pertaining to currentUser
const currentUserReducer = (oldState = null, action) => {
    let newState
    
    switch(action.type){
      case "LOG_IN_USER":
        newState = action.payload
        return newState
      case "LOG_OUT_USER":
        newState = null
        return newState
      default:
        return oldState
    }  
}

const policeDepartmentReducer = (oldState = null, action) => {
  let newState
  
  switch(action.type){
    case "SET_POLICE_DEPARTMENT":
      newState = action.payload[0]
      return newState
    default:
      return oldState
  }  
}

const reportsReducer = (oldState = [], action) => {
  let newState

  switch(action.type){
    case "FETCHED_ALL_REPORTS":
      newState = action.payload
      return newState
    case "ADD_TO_ALL_REPORTS_ARR":
      newState = [oldState.concat(action.payload)]
      return newState
    default:
      return oldState
  }
}

const communityFeelingsReducer = (oldState = [], action) => {
  let newState

  switch(action.type){
    case "FETCHED_COMMUNITY_COMMENTS":
      newState = action.payload
      return newState
    case "SUBMITTED_NEW_COMMENT":
      return oldState.concat(action.payload)
    default:
      return oldState
  }
}

// here we create this new state object that will take into consideration the different reducers
// key value pairs, where the value is the matching reducer
const rootReducer = combineReducers({
    userType: userTypeReducer,
    currentUser: currentUserReducer,
    allReports: reportsReducer,
    communityFeelings: communityFeelingsReducer,
    policeDepartment: policeDepartmentReducer
})


export default rootReducer 