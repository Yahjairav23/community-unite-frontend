import React from 'react'
import {useParams} from 'react-router-dom'

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
        .then(report => this.setState({report: report, citizen: report.citizen, police: report.police}))
    }

    
    render(){
        return(
            this.state.report ?
            <div>
                <h1 class="display-4">Report | {this.state.report.id}</h1>
                <div class="row">
                <div class="col-6 col-md-4">

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Encounter Location</h5>
                            <p class="card-text">{this.state.report.location}<br/>{this.state.report.city}, {this.state.report.state}</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Citizen Involved</h5>
                            <p class="card-text">{this.state.citizen.name}</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Officer Involved</h5>
                            <p class="card-text">{this.state.police.name}</p>
                        </div>
                    </div>

                    <div class="row">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Date Of Encounter</h5>
                            <p class="card-text">{this.state.report.date}</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Time Of Encounter</h5>
                            <p class="card-text">{this.state.report.time}</p>
                        </div>
                    </div>
                </div>
                    
                </div>
                <div class="col-md-8">

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
            </div>
            :
            null
        )
    }
}

export default ReportDetails