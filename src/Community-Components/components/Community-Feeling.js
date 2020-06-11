import React from 'react'

const communityCommentItem = (props) => {
    return (
        <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{props.comment.description}</h5>
        </div>
        <small class="mb-1 text-muted">{props.comment.date}</small>
        </a>
    )
}


export default communityCommentItem