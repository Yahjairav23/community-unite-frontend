import React from 'react'

const communityCommentItem = (props) => {
    return (
        <div>
            <div className="card comment-card" style={{width: '18rem', height: '18rem', margin: '10px'}}>
                <div className="card-body">
                    <h5 className="comment-title"><strong className="mb-1">{props.comment.description}</strong></h5>
                    <h6 className="card-subtitle mb-2 text-muted"><small className="mb-1 text-muted">{new Date(props.comment.date).toDateString()}</small></h6>
                </div>
            </div>
        </div>
    )
}


export default communityCommentItem