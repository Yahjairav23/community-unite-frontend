import React from 'react'
import {connect} from 'react-redux'
import {creatingComment} from '../../redux/actions'


class commentForm extends React.Component {
    constructor(){
        super()
        this.state = {
            comment: ''

        }
    }

    changeField = (e) => {
        this.setState({comment: e.target.value})
    }
// Need to fix this so that current user is used as the person writing the comment.
    submitForm = (e) => {
        e.preventDefault()
        let commentObj = {description: this.state.comment, police_department_id: this.props.policeDepartment.id, citizen_id: 8, date: new Date()}
        this.props.creatingComment(commentObj)
        e.target.reset()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="How do you think your Police Department is performing?" onChange={this.changeField} />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

const MapStateToProps = (state) => ({
    policeDepartment: state.policeDepartment
})

const mapDispatchToProps = (dispatch) => {
    
    return {
        creatingComment: (comment) => {dispatch( creatingComment(comment))}
    }
}

export default connect(MapStateToProps, mapDispatchToProps)(commentForm)