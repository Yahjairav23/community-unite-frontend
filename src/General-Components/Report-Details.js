import React from 'react'
import {connect} from 'react-redux'
import {createdEscalation} from '../redux/actions'


import Escalation from './Escalation-Details'

class ReportDetails extends React.Component {

    constructor(){
        super()
        this.state={
        }
    }
    componentDidMount = () => {
        const id = this.props.reportId
        
        fetch(`http://localhost:3000/reports/${id}`)
        .then(resp => resp.json())
        .then(report => {
            // const escalation = this.props.escalations.find(escalation => escalation.report_id === report.id)
            this.setState({report: report, citizen: report.citizen, police: report.police, escalation: report.escalation
        })
        })
    }

    fieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = () => {
        const s = this.state
        const escalationObj = {
            report_id: s.report.id,
            reason: s.reason
        }
        fetch("http://localhost:3000/escalations",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(escalationObj)
        })
        .then(resp => resp.json())
        .then(escalation => {
            this.setState({escalation: escalation})
            this.props.createdEscalation(escalation)
        })
        
    }

    
    render(){
        return(
            this.state.report ?
            <div>

                {this.props.userType !== "citizen" ? null :
                this.state.escalation ? null :
                <div>
                    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Escalate
                    </button>
                    <div class="collapse" id="collapseExample">
                        <div class="well">
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                this.handleSubmit()
                                e.target.reset()
                            }}>
                                <textarea class="form-control" onChange={this.fieldChange} type='text' name='reason' placeholder='Please provide a valid reason for your escalation request.'/>
                                <input type='submit' value='Submit'/>
                            </form>
                        </div>
                    </div>
                </div>}

                <h1 class="display-4">Report | {this.state.report.id}</h1>
                <div class="row">
                <div class="col-md-3 col-md-pull-9">

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Encounter Location</h5>
                            <p class="card-text">{this.state.report.location}<br/>{this.state.report.city}, {this.state.report.state}</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Citizen Involved</h5>
                                {this.state.citizen.name ?
                                    <p class="card-text">{this.state.citizen.name}</p>
                                    :
                                    <p class="card-text">Citizen Name Not Available</p>
                                }
                                {this.props.userType !== "oversightAgency" ?
                                    null
                                    :
                                    this.state.citizen.name ?
                                        <div>
                                        <p class="card-text">{this.state.citizen.address}</p>
                                        <p class="card-text">{this.state.citizen.city}, {this.state.citizen.state}</p>
                                        {this.state.citizen.phone_number ? <p>Phone Number: {this.state.citizen.phone_number}</p> : null}
                                        {this.state.citizen.email ? <p>Email: {this.state.citizen.email}</p> : null}
                                        </div>
                                        :
                                        <p class="card-text">Citizen Information Not Available</p>
                                }
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Officer Involved</h5>
                            <p class="card-text">{this.state.police.name}</p>
                            <p class="card-text">Badge Number: {this.state.police.badge_number}</p>
                        </div>
                    </div>

                    <div class="row">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Date Of Encounter</h5>
                            <p class="card-text">{new Date(this.state.report.date).toDateString()}</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Time Of Encounter</h5>
                            <p class="card-text">{new Date(this.state.report.time).toLocaleTimeString()}</p>
                        </div>
                    </div>
                </div>
                    
                </div>
                <div class="col-md-9 col-md-push-3">

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Reason For Encounter</h5>
                            <p class="card-text">{this.state.report.reason}</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Description Of Encounter</h5>
                            <p class="card-text">{this.state.report.incident_description}</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Resolution</h5>
                            <p class="card-text">{this.state.report.resolution}</p>
                        </div>
                    </div>

                <div class="row">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Arrest Made?</h5>
                            <p class="card-text">{this.state.report.arrest ? "Yes" : "No"}</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Was Force Used?</h5>
                            <p class="card-text">{this.state.report.force_used ? "Yes" : "No"}</p>
                        </div>
                    </div>
                </div>

                </div>
                </div>
                {/* <dl class="col">
                    <dt class="col-sm-3">Encounter Location:</dt>
                    <dd class="col-sm-3">{this.state.report.location}</dd>
                    <dd class="col-sm-3">{this.state.report.city}</dd>
                </dl> */}

                {this.state.escalation ? <div class="card">
                    <Escalation escalation={this.state.escalation}/>
                </div> : null}
            </div>
            :
            null
        )
    }
}

const mapStateToProps = (state) => ({
    userType: state.userType,
    escalations: state.escalation
})

const mapDispatchToProps = (dispatch) => {
    return{
        createdEscalation: (escalationObj) => {dispatch(createdEscalation(escalationObj))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportDetails)