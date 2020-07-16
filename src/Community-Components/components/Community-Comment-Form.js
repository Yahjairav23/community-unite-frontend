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
    }

    render(){
        return(
            <div>
                
                <form onSubmit={(e) => this.submitForm(e)}>
                        <div className='input-fields textbox-border' style={{'margin-top': '0'}}>
                            <textarea onChange={this.changeField} id="exampleFormControlTextarea1" rows="3" placeholder="How do you think your Police Department is performing?"></textarea>
                        </div>
                    <input className='signin-button' type='submit' value='Submit' />
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