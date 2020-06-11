import React from 'react'
import {connect} from 'react-redux'
import CommunityFeeling from './Community-Feeling'
import CommentForm from './Community-Comment-Form'


const communityFeelingsList = (props) => {
    
    return (
        <div>
            {props.userType === "citizen" ? 
            <div class="form-group">
                <h5 >Let Your Voice Be Heard</h5>
                <CommentForm/>
            </div>
            :
            null}
            {/* <h3>Let Your Voice Be Heard</h3>
            <CommentForm /> */}
            <div class="dropdown-divider"></div>
            <h3>Community Comments</h3>
            <div class="list-group">
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