import React from 'react'
import CommentForm from '../../Community-Components/components/Community-Comment-Form'


class citizenProfileContainer extends React.Component {
    render(){
        return(
            <div>
                <div>My Reports</div>
                <div>My Escalations</div>
                <div>Comment Submit</div>
                <CommentForm />
            </div>
        )
    }
}

export default citizenProfileContainer