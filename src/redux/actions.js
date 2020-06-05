const REPORTS = "http://localhost:3000/reports"
const COMMENTS = "http://localhost:3000/comments"
const PD = "http://localhost:3000/police_departments"


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


export {fetchingAllReports, fetchingCommunityComments, creatingComment, fetchingAllPDs}