import React from 'react'
import {connect} from 'react-redux'

import ActionTakenForm from '../Oversight-Agency/components/Action-Taken-Form'

class Escalation extends React.Component {

    constructor(){
        super()
        this.state = {
            actions: []
        }
    }

    componentDidMount = () => {
        this.setState({actions: this.props.escalation.action_takens})
    }

    updateActions = (actionTakenObj) => {

        fetch("http://localhost:3000/action_takens", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(actionTakenObj)
        })
        .then(resp => resp.json())
        .then(action => {
            this.setState({actions: [...this.state.actions, action]})
            
        })
    } 

    render(){
        return(
            <div>
                <div class="card-body">
                    <strong class="card-text">Escalation Status: {this.props.escalation.status.toUpperCase()}</strong>
                </div>
                <div class="card-body">
                    <h4 class="card-title text-center">Actions Taken</h4>

                    {this.state.actions.length > 0 ?
                        this.state.actions.map(action => {
                            return(
                                <div>
                                    <strong class="card-text">{new Date(action.date).toDateString()}</strong>
                                    <blockquote><p class="card-text">{action.description}</p></blockquote>
                                    <div class="dropdown-divider"></div>
                                </div>
                            )
                        })
                    :
                        <p class="card-text">No actions have been taken at this time. Please allow 3 - 5 business days for review.</p>
                    }

                    {this.props.userType === "oversightAgency" ?
                        <div><ActionTakenForm escalation={this.props.escalation} updateActions={this.updateActions}/></div>
                    :
                        null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userType: state.userType,
    actionTaken: state.actionTaken
})

export default connect(mapStateToProps)(Escalation) 