import React from 'react'

const communityCommentItem = (props) => {
    return (
        <div>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="row">
                <div class="col-xs-12 col-md-8 text-left">
                <div class="d-flex w-100 justify-content-between">
                    <strong class="mb-1">{props.comment.description}</strong>
                </div>
                </div>
                <div class="col-xs-6 col-md-4 text-right">
                <small class="mb-1 text-muted">{new Date(props.comment.date).toDateString()}</small>
                </div>
                </div>
            </a>
        </div>
    )
}


export default communityCommentItem