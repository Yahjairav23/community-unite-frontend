import React from 'react'
import {connect} from 'react-redux'
import CommunityFeeling from './Community-Feeling'
import CommentForm from './Community-Comment-Form'


const communityFeelingsList = (props) => {
    
    return (
        <div>
            <h3>Let Your Voice Be Heard</h3>
            <CommentForm />
            <h3>Community Comments</h3>
            {props.communityComments.map(comment => (
                <CommunityFeeling comment={comment} key={comment.id}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {
        communityComments: state.communityFeelings
    }
}


export default connect(mapStateToProps)(communityFeelingsList)