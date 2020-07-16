import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {addingToReportArr} from '../../redux/actions'

class ReportForm extends React.Component {

    constructor(){
        super()
        this.state = {
            citizenId: null,
            civilian: null,
            forceUsed: false,
            arrestMade: false
        }
    }

    findCivilian = (e, stateInfo) => {
        e.preventDefault()
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
        fetch('http://localhost:3000/reports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({reportObj})
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({new_report: data})
            this.props.addReportToArr(data)
        })
    }

    render(){
        return(
            <div className="report-form-holder">
                
            {this.state.new_report ? 
            <Redirect to={`/reports/${this.state.new_report.id}`}/> 
            :
            this.state.civilian === null ?
                <div className='report-form-container'>
                    <h1 className="form-title">Encounter Report</h1>
                    <form onSubmit={(e) => {this.findCivilian(e, this.state)}}>
                        <div className='fields'>
                            <div className='input-fields'>
                                <input type='text' id='citizenId' name='citizenId' required='required' placeholder="Citizen ID" onChange={this.fieldChange}/>
                            </div>

                            <div className='input-fields'>
                                <input type='text' id='citizenIdValidate'name='citizenIdValidate' placeholder='Validate Citizen ID' onChange={this.fieldChange}/>
                            </div>
                        </div>
                                <input className='btn animated-btn' type='submit' value='Submit'/>
        
                    </form>
                </div>
            :
            <div className='lg-report-form-container'>
                
                <form onSubmit={this.handleSubmit}>

                    <div className="row">
                            <div className="col">
                            <div className='sm-report-form-container '>
                            <h1 className="sm-form-title">Encounter Location</h1>
                            <div className='fields'>
                                <div className='input-fields'>
                                    <input
                                        onChange={this.fieldChange}
                                        required
                                        id="encounterAddress"
                                        placeholder="Address"
                                        name="encounterAddress"
                                    />
                                </div>
                            <br/>
                                <div className='input-fields'>
                                    <input
                                        onChange={this.fieldChange}
                                        name="encounterAddress2"
                                        placeholder="Address"
                                        id="encounterAddress2"
                                    />
                                </div> 
                                <div className='input-fields'>            
                                    <input
                                        onChange={this.fieldChange}
                                        name="city"
                                        placeholder="City"
                                        id="city"
                                    />
                                </div> 
                            <br/>
                                <div className='input-fields'>
                                    <input
                                        onChange={this.fieldChange}
                                        name="state"
                                        placeholder="State"
                                        id="state"
                                    />
                                </div>
                            <br/>
                                <div className='input-fields'>
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

                    <div className="col">
                    <div className='sm-report-form-container'>
                    <h1 className="sm-form-title">Citizen Information</h1>
                        <div className='fields'>
                        <div className='input-fields'>
                            <input
                                required
                                name="citizenId"
                                placeholder="Citizen ID"
                                id="citizenId"
                                value={this.state.civilian.state_id}
                            />
                        </div>
                        <div className='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                required
                                name="citizenName"
                                placeholder="Citizen Name"
                                id="citizenName"
                                value={this.state.civilian.name}
                            />
                        </div>
                        <div className='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                type="tel"
                                name="citizenPhoneNumber"
                                placeholder="Citizen Phone Number"
                                id="citizenPhoneNumber"
                                value={this.state.civilian.phone_number}
                            />
                        </div>
                        <div className='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                name="citizenEmail"
                                placeholder="Citizen Email"
                                id="citizenEmail"
                                value={this.state.civilian.email}
                            />
                        </div>
                        <div className='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                name="citizenAddress"
                                placeholder="Citizen Address"
                                id="citizenAddress"
                                value={this.state.civilian.address}
                            />
                        </div>
                        <div className='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                name="citizenAddress2"
                                placeholder="Citizen Address"
                                id="citizenAddress2"
                            />
                        </div>
                        <div className='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                name="citizenCity"
                                placeholder="City"
                                id="citizenCity"
                                value={this.state.civilian.city}
                            />
                        </div>
                        <div className='input-fields'>
                            <input
                                onChange={this.fieldChange}
                                name="citizenState"
                                placeholder="State"
                                id="citizenState"
                                value={this.state.civilian.state}
                            />
                        </div>
                        <div className='input-fields'>
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

                <h1 className="form-title">Encounter Details</h1>
                <div className="row">
                    <div className='wide-sm-report-form-container'>
                        <div className='fields'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='input-fields'>
                                        <input
                                            onChange={this.fieldChange}
                                            required
                                            name="currentTime"
                                            type="time"
                                            id="currentTime"
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='input-fields'>
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
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <h4 className='form-label-report' style={{'margin-right': '30px'}}>Was Force Used?</h4>
                                        <input
                                            type='checkbox'
                                            onChange={this.checkBoxFieldChange}
                                            name="forceUsed"
                                            placeholder="Force Used?"
                                            id="forceUsed"
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <h4 className='form-label-report' style={{'margin-right': '30px'}}>Was An Arrest Made?</h4>
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

                <div className='wide-sm-report-form-container'>
                <h1 className="sm-form-title">Reason</h1>
                    <div className='fields'>
                        <div className='input-fields'>
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
                <div className='wide-sm-report-form-container'>
                <h1 className="sm-form-title">Descriptions</h1>
                <div className='fields'>
                        <div className='input-fields'>
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
                <div className='wide-sm-report-form-container'>
                <h1 className="sm-form-title">Resolution</h1>
                <div className='fields'>
                        <div className='input-fields'>
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
                <div className='row'>
                    <input
                        className='btn animated-btn'
                        type='submit'
                        value='Submit'
                    />

                    <input
                        className='btn animated-btn'
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