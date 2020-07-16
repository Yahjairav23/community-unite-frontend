import React from 'react'
import {connect} from 'react-redux'

import ActionTakenForm from '../Oversight-Agency/components/Action-Taken-Form'

class Escalation extends React.Component {

    constructor(){
        super()
        this.state = {
            actions: [],
        }
    }

    componentDidMount = () => {
        this.setState({actions: this.props.escalation.action_takens, escalationStatus: this.props.escalation.status})
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

    updateEscalationStatus = () => {
        fetch(`http://localhost:3000/escalations/${this.props.escalation.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status: 'resolved'})
        })
        .then(resp => resp.json())
        .then( escalation => this.setState({escalationStatus: escalation.status}))
    }

    render(){
        return(
            <div>
                <div className="card-body">
                    <strong className="card-text">Escalation Status: <span className="text-uppercase">{this.state.escalationStatus}</span></strong>
                    {this.state.escalationStatus === "active" && this.props.userType === "oversightAgency" ? <button className="escalation-status-btn" onClick={this.updateEscalationStatus}>Mark Resolved</button> : null}
                </div>
                <div className="card-body">
                    <h4 className="card-title text-center">Actions Taken</h4>

                    {this.state.actions.length > 0 ?
                        this.state.actions.map(action => {
                            return(
                                <div>
                                    <strong className="card-text">{new Date(action.date).toDateString()}</strong>
                                    <blockquote><p className="card-text">{action.description}</p></blockquote>
                                    <div className="dropdown-divider"></div>
                                </div>
                            )
                        })
                    :
                        <p className="card-text">No actions have been taken at this time. Please allow 3 - 5 business days for review.</p>
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