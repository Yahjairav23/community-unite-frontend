import React from 'react'
import {connect} from 'react-redux'
import {creatingComment} from '../../redux/actions'


class commentForm extends React.Component {
    constructor(){
        super()
        this.state = {
            description: ''

        }
    }

    changeField = (e) => {
        this.setState({description: e.target.value})
    }
    
    submitForm = (e) => {
        e.preventDefault()
        let commentObj = {description: this.state.description, police_department_id: this.props.policeDepartment.id, citizen_id: this.props.currentUser.id, date: new Date()}
        this.props.creatingComment(commentObj)
        e.target.reset()
        alert('Thank you for your feedback!')

        //I can add a local state property that can change on submit of comment and allow this allert to be displayed. 
        //Better looking alert! Should place in render with a conditional.
        // <div class="alert alert-warning alert-dismissible fade show" role="alert">
        // <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        // <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        //     <span aria-hidden="true">&times;</span>
        // </button>
        // </div>
    }

    render(){
        return(
            <div>
                <form onSubmit={(e) => this.submitForm(e)}>
                    <textarea onChange={this.changeField} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="How do you think your Police Department is performing?"></textarea>
                    {/* <input type="text" placeholder="How do you think your Police Department is performing?" onChange={this.changeField} /> */}
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    policeDepartment: state.policeDepartment,
    currentUser: state.currentUser,
    communityComments: state.communityFeelings
})

const mapDispatchToProps = (dispatch) => {
    
    return {
        creatingComment: (comment, commentArr) => {dispatch( creatingComment(comment, commentArr))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(commentForm)