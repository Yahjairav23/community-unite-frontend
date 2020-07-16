import React from 'react'
import {connect} from 'react-redux'
import {createdEscalation} from '../redux/actions'


import Escalation from './Escalation-Details'
import ReportCommentForm from './Report-Comment-Form'
import ReportComment from './Report-Comment'

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
            this.setState({report: report, citizen: report.citizen, police: report.police, escalation: report.escalation, comments: report.comments
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

    updateComments = (commentObj) => {
        const id = this.props.reportId
        
        fetch(`http://localhost:3000/reports/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentObj)
        })
        .then(resp => resp.json())
        .then(report => {
            this.setState({report: report, citizen: report.citizen, police: report.police, escalation: report.escalation, comments: report.comments
        })
        })
    }

    
    render(){
        return(
            this.state.report ?
            <div className='container report-container'>

                {this.props.userType !== "citizen" ? null :
                this.state.escalation ? null :
                <div>
                    <button className='animated-btn btn' type="button" data-toggle="collapse" data-target="#collapseReason" aria-expanded="false" aria-controls="collapseExample">
                        Escalate
                    </button>
                    <div className="collapse" id="collapseReason">
                        <div className="well">
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                this.handleSubmit()
                                e.target.reset()
                            }}>
                                <textarea className="form-control" onChange={this.fieldChange} type='text' name='reason' placeholder='Please provide a valid reason for your escalation request.'/>
                                <input type='submit' value='Submit'/>
                            </form>
                        </div>
                    </div>
                </div>}
            <div className='details-header'>
                <h1 className="display-4">Report | {this.state.report.id}</h1>
            </div>

                <div className="row">
                <div className="col-md-3 col-md-pull-9">

                        <div className="encounter-card">
                            <h5>Encounter Location</h5>
                            <p>{this.state.report.location}<br/>{this.state.report.city}, {this.state.report.state}</p>
                        </div>

                        <div className="encounter-card">
                            <h5 className="card-title">Citizen Involved</h5>
                                {this.state.citizen.name ?
                                    <p className="card-text">{this.state.citizen.name}</p>
                                    :
                                    <p className="card-text">Citizen Name Not Available</p>
                                }
                                {this.props.userType !== "oversightAgency" ?
                                    null
                                    :
                                    this.state.citizen.name ?
                                        <div>
                                        <p className="card-text">{this.state.citizen.address}</p>
                                        <p className="card-text">{this.state.citizen.city}, {this.state.citizen.state}</p>
                                        {this.state.citizen.phone_number ? <p>Phone Number: {this.state.citizen.phone_number}</p> : null}
                                        {this.state.citizen.email ? <p>Email: {this.state.citizen.email}</p> : null}
                                        </div>
                                        :
                                        <p className="card-text">Citizen Information Not Available</p>
                                }
                        </div>

                        <div className="encounter-card">
                            <h5 className="card-title">Officer Involved</h5>
                            <p className="card-text">{this.state.police.name}</p>
                            <p className="card-text">Badge Number: {this.state.police.badge_number}</p>
                        </div>  
                </div>

                <div className="col-md-9 col-md-push-3">

                        <div className="encounter-card">
                            <h5 className="card-title">Reason For Encounter</h5>
                            <p className="card-text">{this.state.report.reason}</p>
                        </div>

                        <div className="encounter-card">
                            <h5 className="card-title">Description Of Encounter</h5>
                            <p className="card-text">{this.state.report.incident_description}</p>
                        </div>

                        <div className="encounter-card">
                            <h5 className="card-title">Resolution</h5>
                            <p className="card-text">{this.state.report.resolution}</p>
                        </div>

                <div className="row small-encounter-row">
                        <div className="encounter-card">
                            <h5 className="card-title">Arrest Made?</h5>
                            <p className="card-text">{this.state.report.arrest ? "Yes" : "No"}</p>
                        </div>

                        <div className="encounter-card">
                            <h5 className="card-title">Was Force Used?</h5>
                            <p className="card-text">{this.state.report.force_used ? "Yes" : "No"}</p>
                        </div>

                        <div className="encounter-card">
                            <h5 className="card-title">Date Of Encounter</h5>
                            <p className="card-text">{new Date(this.state.report.date).toDateString()}</p>
                        </div>

                        <div className="encounter-card">
                            <h5 className="card-title">Time Of Encounter</h5>
                            <p className="card-text">{new Date(this.state.report.time).toLocaleTimeString()}</p>
                        </div>

                </div>

                </div>
                </div>
               
                <div className="row">

                    <div className='col-md-6'>
                        {this.state.escalation ? <div className="encounter-card">
                            <Escalation escalation={this.state.escalation}/>
                        </div> : <div className="encounter-card">
                                <h4>This report has not been escalated at this time.</h4>
                            </div>}
                    </div>

                    <div className='col-md-6'>
                        <div className="encounter-card">
                            <h2>Comments From {this.state.citizen.name}</h2>
                            {this.props.userType === 'citizen' && this.props.currentUser.id === this.state.citizen.id ? <ReportCommentForm updateComment={this.updateComments}/> : null}
                        
                        
                            {this.state.comments.length>0 ? <div className='report-comments'>{this.state.comments.map(comment => <ReportComment comment={comment} />)}</div> : <div>No Comments At This Time.</div>}
                        </div>
                    </div>
                </div>

            </div>
            :
            <div>Information Not Available At This Time</div>

        )
    }
}

const mapStateToProps = (state) => ({
    userType: state.userType,
    currentUser: state.currentUser,
    escalations: state.escalation
})

const mapDispatchToProps = (dispatch) => {
    return{
        createdEscalation: (escalationObj) => {dispatch(createdEscalation(escalationObj))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportDetails)