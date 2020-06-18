import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {addingToReportArr} from '../../redux/actions'


//Material-ui Styling imports
import {Container, Typography, TextField, Button} from '@material-ui/core'


class ReportForm extends React.Component {

    constructor(){
        super()
        this.state = {
            citizenId: null,
            civilian: null,
            forceUsed: false,
            arrestMade: false
        }
        // this.findCivilian = this.findCivilian.bind(this)
    }

    findCivilian = (e, stateInfo) => {
        e.preventDefault()
        // debugger
        if(this.state.citizenId === this.state.citizenIdValidate){
            fetch('http://localhost:3000/api/v1/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({citizenId: this.state.citizenId})
            })
            .then(resp => resp.json())
            .then(data => {
                this.setState({civilian: data})
            })
        }else{
            alert("Please verify that you have properly verified citizen ID#.")
        }
    }

    fieldChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    checkBoxFieldChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.checked
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const citizen_id = this.state.civilian.id
        const police_id = this.props.currentUser.id
        const reportDetails = this.state 
        delete reportDetails.civilian
        delete reportDetails.citizenId
        delete reportDetails.citizenIdValidate
        const reportObj = {
            police_id: police_id,
            citizen_id: citizen_id,
            reportDetails: reportDetails
        }
        // debugger
        fetch('http://localhost:3000/reports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({reportObj})
        })
        .then(resp => resp.json())
        .then(data => {
            // debugger
            this.setState({new_report: data})
            this.props.addReportToArr(data)
        })
    }

    render(){
        return(
            <div class="report-form-holder">
                
                {this.state.new_report ? <Redirect to={`/reports/${this.state.new_report.id}`}/> :
         this.state.civilian === null ?
                <div class='report-form-container'>
                    <h1 class="form-title">Encounter Report</h1>
                    <form onSubmit={(e) => {this.findCivilian(e, this.state)}}>
                        <div class='fields'>
                            <div class='input-fields'>
                                <input type='text' id='citizenId' name='citizenId' required='required' placeholder="Citizen ID" onChange={this.fieldChange}/>
                            </div>

                            <div class='input-fields'>
                                <input type='text' id='citizenIdValidate'name='citizenIdValidate' placeholder='Validate Citizen ID' onChange={this.fieldChange}/>
                            </div>
                        </div>
                                <input class='btn animated-btn' type='submit' value='Submit'/>
        
                    </form>
                </div>
            :
            <div class='lg-report-form-container'>
                
                <form onSubmit={this.handleSubmit}>

                    <div class="row">
                            <div class="col">
                            <div class='sm-report-form-container '>
                            <h1 class="sm-form-title">Encounter Location</h1>
                            <div class='fields'>
                                <div class='input-fields'>
                                    <input
                                        onChange={this.fieldChange}
                                        required
                                        id="encounterAddress"
                                        placeholder="Address"
                                        name="encounterAddress"
                                    />
                                </div>
                            <br/>
                                <div class='input-fields'>
                                    <input
                                        onChange={this.fieldChange}
                                        name="encounterAddress2"
                                        placeholder="Address"
                                        id="encounterAddress2"
                                    />
                                </div> 
                                <div class='input-fields'>            
                                    <input
                                        onChange={this.fieldChange}
                                        name="city"
                                        placeholder="City"
                                        id="city"
                                    />
                                </div> 
                            <br/>
                                <div class='input-fields'>
                                    <input
                                        onChange={this.fieldChange}
                                        name="state"
                                        placeholder="State"
                                        id="state"
                                    />
                                </div>
                            <br/>
                                <div class='input-fields'>
                                    <input
                                        onChange={this.fieldChange}
                                        name="zipCode"
                                        placeholder="Zip Code"
                                        id="zipCode"
                                    />
                                </div>
                            </div>
                    </div>
                    </div>

                    <div class="col">
                    <div class='sm-report-form-container'>
                    <h1 class="sm-form-title">Citizen Information</h1>
                        <div class='fields'>
                        <div class='input-fields'>
                            <input
                                required
                                name="citizenId"
                                placeholder="Citizen ID"
                                id="citizenId"
                                value={this.state.civilian.state_id}
                            />
                        </div>
                        <div class='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                required
                                name="citizenName"
                                placeholder="Citizen Name"
                                id="citizenName"
                                value={this.state.civilian.name}
                            />
                        </div>
                        <div class='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                type="tel"
                                name="citizenPhoneNumber"
                                placeholder="Citizen Phone Number"
                                id="citizenPhoneNumber"
                                value={this.state.civilian.phone_number}
                            />
                        </div>
                        <div class='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                name="citizenEmail"
                                placeholder="Citizen Email"
                                id="citizenEmail"
                                value={this.state.civilian.email}
                            />
                        </div>
                        <div class='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                name="citizenAddress"
                                placeholder="Citizen Address"
                                id="citizenAddress"
                                value={this.state.civilian.address}
                            />
                        </div>
                        <div class='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                name="citizenAddress2"
                                placeholder="Citizen Address"
                                id="citizenAddress2"
                            />
                        </div>
                        <div class='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                name="citizenCity"
                                placeholder="City"
                                id="citizenCity"
                                value={this.state.civilian.city}
                            />
                        </div>
                        <div class='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                name="citizenState"
                                placeholder="State"
                                id="citizenState"
                                value={this.state.civilian.state}
                            />
                        </div>
                        <div class='input-fields'>
                            <input
                                name="citizenZipCode"
                                placeholder="Zip Code"
                                id="citizenZipCode"
                                value={this.state.civilian.zip_code}
                            />
                        </div>
                        </div>
                        </div>
                    </div>
                </div>

                <h1 class="form-title">Encounter Details</h1>
                <div class="row">
                    <div class='wide-sm-report-form-container'>
                        <div class='fields'>
                            <div class='row'>
                                <div class='col-md-6'>
                                    <div class='input-fields'>
                                        <input
                                            onChange={this.fieldChange}
                                            required
                                            name="currentTime"
                                            type="time"
                                            id="currentTime"
                                        />
                                    </div>
                                </div>
                                <div class='col-md-6'>
                                    <div class='input-fields'>
                                        <input
                                            onChange={this.fieldChange}
                                            required
                                            name="date"
                                            type="date"
                                            id="date"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class='row'>
                                <div class='col-md-6'>
                                    <div class='row'>
                                        <h4 class='form-label-report' style={{'margin-right': '30px'}}>Was Force Used?</h4>
                                        <input
                                            type='checkbox'
                                            onChange={this.checkBoxFieldChange}
                                            name="forceUsed"
                                            placeholder="Force Used?"
                                            id="forceUsed"
                                        />
                                    </div>
                                </div>
                                <div class='col-md-6'>
                                    <div class='row'>
                                        <h4 class='form-label-report' style={{'margin-right': '30px'}}>Was An Arrest Made?</h4>
                                        <input
                                            type='checkbox'
                                            onChange={this.checkBoxFieldChange}
                                            name="arrestMade"
                                            placeholder="Arrest Made?"
                                            id="arrestMade"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='wide-sm-report-form-container'>
                <h1 class="sm-form-title">Reason</h1>
                    <div class='fields'>
                        <div class='input-fields'>
                            <textarea
                                onChange={this.fieldChange}
                                required
                                multiline
                                rows={10}
                                fullWidth
                                name="reason"
                                placeholder="What is your reasoning for this civilian encounter?"
                                id="reason"
                            />
                        </div>
                    </div>
                </div>
                <div class='wide-sm-report-form-container'>
                <h1 class="sm-form-title">Descriptions</h1>
                <div class='fields'>
                        <div class='input-fields'>
                            <textarea
                                onChange={this.fieldChange}
                                required
                                multiline
                                rows={10}
                                fullWidth
                                name="description"
                                placeholder="Incident Description"
                                id="description"
                            />
                        </div>
                    </div>
                </div>
                <div class='wide-sm-report-form-container'>
                <h1 class="sm-form-title">Resolution</h1>
                <div class='fields'>
                        <div class='input-fields'>
                            <textarea
                                onChange={this.fieldChange}
                                required
                                multiline
                                rows={10}
                                fullWidth
                                name="resolution"
                                placeholder="What was the resolution?"
                                id="resolution"
                            />
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <input
                        class='btn animated-btn'
                        type='submit'
                        value='Submit'
                    />

                    <input
                        class='btn animated-btn'
                        type='reset'
                        value="Reset Form"
                    />
                </div>
    
                </form>
            </div>
        
    }
    </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    reportsArr: state.allReports
})

const mapDispatchToProps = (dispatch) => {
    return {
        addReportToArr: (report) => {dispatch(addingToReportArr(report))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReportForm)