import React from 'react'
import {connect} from 'react-redux'
import {creatingActionTaken} from '../../redux/actions'

class ActionTakenForm extends React.Component {
    constructor(){
        super()
        this.state = {
           
        }
    }

    componentDidMount = ()=> {
        this.setState({
            escalation_id: this.props.escalation.id,
            oversight_agency_id: this.props.currentUser.id
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    render(){
        return(
            <div>
                action taken form
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    this.props.updateActions(this.state)
                    e.target.reset()
                }}>
                    <input onChange={this.handleChange} required type='text' name="description" placeholder='Please provide any available updates...'/>
                    <input onChange={this.handleChange} required type='date' name='date'/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userType: state.userType,
    currentUser: state.currentUser,
    actionTaken: state.actionTaken
})

const mapDispatchToProps = (dispatch) => {
    return {
        creatingActionTaken: (actionTakenObj) => {dispatch(creatingActionTaken(actionTakenObj))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionTakenForm)