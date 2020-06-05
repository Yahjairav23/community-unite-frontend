import React from 'react'

const communityCommentItem = (props) => {
    return (
        <div>
            <p>Date: {props.comment.date}</p>
            <p>Comment: {props.comment.description}</p>

        </div>
    )
}


export default communityCommentItem