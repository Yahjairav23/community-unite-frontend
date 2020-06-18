import React from 'react'
import {connect} from 'react-redux'
import CommunityFeeling from './Community-Feeling'
import CommentForm from './Community-Comment-Form'


const communityFeelingsList = (props) => {
    const descComments = props.communityComments.sort( ( a, b ) => { return Date.parse(b.date) - Date.parse(a.date) } )
    return (
        <div class="col px-md-5">
            {props.userType === "citizen" ? 
            <div class="form-group">
                <div class="dropdown-divider"></div>
                    <div class='community-comment-form'>
                        <h3 >Let Your Voice Be Heard</h3>
                        <CommentForm/>
                    </div>
                <div class="dropdown-divider"></div>
            </div>
            :
            null}
            {/* <h3>Community Comments</h3> */}
            <div class="row justify-content-md-center" >
                {props.communityComments.map(comment => (
                    <CommunityFeeling comment={comment} key={comment.id}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
        userType: state.userType,
        communityComments: state.communityFeelings
})


export default connect(mapStateToProps)(communityFeelingsList)