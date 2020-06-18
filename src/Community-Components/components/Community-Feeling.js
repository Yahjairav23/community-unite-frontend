import React from 'react'

const communityCommentItem = (props) => {
    return (
        <div>
            {/* <a class="list-group-item list-group-item-action"> */}
                {/* <div class="row"> */}
                {/* <div class="col-xs-12 col-md-8 text-left"> */}
                {/* <div class="d-flex w-100 justify-content-between"> */}
                <div class="card comment-card" style={{width: '18rem', height: '18rem', margin: '10px'}}>
                    <div class="card-body">
                    <h5 class="comment-title"><strong class="mb-1">{props.comment.description}</strong></h5>
                {/* </div> */}
                {/* </div> */}
                {/* <div class="col-xs-6 col-md-4 text-right"> */}
                <h6 class="card-subtitle mb-2 text-muted"><small class="mb-1 text-muted">{new Date(props.comment.date).toDateString()}</small></h6>
                    </div>
                </div>
            {/* </a> */}
        </div>
    )
}


export default communityCommentItem