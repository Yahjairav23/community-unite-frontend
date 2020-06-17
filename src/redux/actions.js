const CITIZENS = "http://localhost:3000/api/v1/citizens"
const REPORTS = "http://localhost:3000/reports"
const COMMENTS = "http://localhost:3000/comments"
const PD = "http://localhost:3000/police_departments"
const ACTIONTAKEN = "http://localhost:3000/action_takens"
const ESCALATIONS = "http://localhost:3000/escalations"


function setUserType(type){
    return {type: "SET_USER_TYPE", payload: type}
}

function setCurrentUser(user){
    return {type: "LOG_IN_USER", payload: user}
}

function fetchingCurrentUser(token, userType){
//    debugger
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/${userType}_decode_token`, {
            headers: {
              "Authenticate": localStorage.token
            }
          })
        .then(resp => resp.json())
        .then(user => {
            dispatch(
            setCurrentUser(user)
        )
        dispatch(
            setUserType(userType)
        )
        }
        )
    }
}

function logOutUser(){
    return {type: 'LOG_OUT_USER'}
}

//////////////////////////////////

function fetchedAllPDs(police_departments){
    return {type: "SET_POLICE_DEPARTMENT", payload: police_departments}
}

function fetchingAllPDs(){
    return (dispatch) => {
        fetch(PD)
        .then(resp => resp.json())
        .then(police_departments => dispatch(
            fetchedAllPDs(police_departments)
        ))
    }
}

//////////////////////////////////

function fetchedAllReports(reports){
    return {type: "FETCHED_ALL_REPORTS", payload: reports}
}

function fetchingAllReports(){
    return (dispatch) => {
        fetch(REPORTS)
        .then(resp => resp.json())
        .then(reports => dispatch(
            fetchedAllReports(reports)
        ))
    }
}

function addingToReportArr(report){
    return {type: "ADD_TO_ALL_REPORTS_ARR", payload: report}
}

//////////////////////////////////

function fetchedAllComments(comments){
    return {type: "FETCHED_COMMUNITY_COMMENTS", payload: comments}
}

function fetchingCommunityComments(){
    return (dispatch) => {
        fetch(COMMENTS)
        .then(resp => resp.json())
        .then(reports => dispatch(
            fetchedAllComments(reports)
        ))
    }
}

//////////////////////////////////

function fetchedAllEscalations(escalations){
    return {type: "FETCHED_ALL_ESCALATIONS", payload: escalations}
}

function fetchingAllEscalations(){
    return (dispatch) => {
        fetch(ESCALATIONS)
        .then(resp => resp.json())
        .then(escalations => dispatch(
            fetchedAllEscalations(escalations)
        ))
    }
}

function createdEscalation(escalation){
    return {type: 'CREATED_NEW_ESCALATION', payload: escalation}
}

function creatingEscalation(escalationObj){
    return (dispatch) => {
        fetch(ESCALATIONS,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(escalationObj)
        })
        .then(resp => resp.json())
        .then(escalation => createdEscalation(escalation))
    }

}

//////////////////////////////////

function fetchedAllEscalatedReports(escalated_reports){
    return {type: "FETCHED_ESCALATED_REPORTS", payload: escalated_reports}
}

function fetchingAllEscalatedReports(){
    return (dispatch) => {
        fetch('http://localhost:3000/escalated_reports')
        .then(resp => resp.json())
        .then(escalations => dispatch(
            fetchedAllEscalatedReports(escalations)
        ))
    }
}

//////////////////////////////////

function commentCreated(comments){
    return {type: "SUBMITTED_NEW_COMMENT", payload: comments}
}

function creatingComment(commentObj){
   
    return (dispatch) => {
        fetch(COMMENTS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentObj)
        })
        .then(resp => resp.json())
        .then(comment => {
            
            dispatch(
            commentCreated(comment)
        
        )}
        )
    }
}

//////////////////////////////////

function fetchedAllActions(actions){
    // debugger
    return {
        type: "FETCHED_ALL_ACTIONS", payload: actions
    }
}

function fetchingAllActions(){
    // debugger
    return (dispatch) => {
        fetch(ACTIONTAKEN)
        .then(resp => resp.json())
        .then(actions => dispatch(
            fetchedAllActions(actions)
        ))
    }
}

function actionCreated(action){
    return {type: 'ACTION_CREATED', payload: action}
}

function creatingActionTaken(actionTakenObj){

    return (dispatch) => {
        fetch(ACTIONTAKEN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(actionTakenObj)
        })
        .then(resp => resp.json())
        .then(action => {
            dispatch(
                actionCreated(action)
            )
        })

    }
}


export {createdEscalation, creatingEscalation, fetchingAllEscalatedReports, fetchingAllEscalations, fetchingAllActions, creatingActionTaken, addingToReportArr, setUserType, logOutUser, setCurrentUser, fetchingAllReports, fetchingCommunityComments, creatingComment, fetchingAllPDs, fetchingCurrentUser}