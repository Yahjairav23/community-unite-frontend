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
            civilian: null
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
            .then(data => this.setState({civilian: data}))
        }else{
            alert("Please verify that you have properly verified citizen ID#.")
        }
    }

    fieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
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
            this.setState({new_report: data})
            this.props.addReportToArr(data)
        })
    }

    render(){
        return(
            <div>
                <Typography component="h1" varient="h5">
                    Report
                </Typography>
                {this.state.new_report ? <Redirect to="/community-reports"/> :
         this.state.civilian === null ?
            <Container component="main" maxWidth='sm'>
                <form onSubmit={(e) => {this.findCivilian(e, this.state)}}>
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="citizenId"
                        label="Citizen ID"
                        id="citizenId"
                        autoComplete="citizenId"
                    />
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="citizenIdValidate"
                        label="Verify Citizen ID"
                        id="citizenIdValidate"
                        autoComplete="citizenIdValidate"
                    />
                    <Button
                        type='submit'
                        // fullWidth
                        variant='contained'
                        color='primary'
                    >Submit</Button>
                </form>
            </Container>
            :
            <Container component="main" maxWidth='lg'>
                
                <form onSubmit={this.handleSubmit}>
                  <Container>
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        id="encounterAddress"
                        label="Address"
                        name="encounterAddress"
                        autoComplete="encounterAddress"
                        // autoFocus
                    />
                <br/>
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        // required
                        // fullWidth
                        name="encounterAddress2"
                        label="Address"
                        id="encounterAddress2"
                        autoComplete="encounterAddress2"
                    />
                </Container>
                <Container>
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="city"
                        label="City"
                        id="city"
                        autoComplete="city"
                    />
                <br/>
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="state"
                        label="State"
                        id="state"
                        autoComplete="state"
                    />
                <br/>
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="zipCode"
                        label="Zip Code"
                        id="zipCode"
                        autoComplete="zipCode"
                    />
                </Container>
                <Container>
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="currentTime"
                        type="time"
                        id="currentTime"
                        autoComplete="currentTime"
                    />
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="date"
                        type="date"
                        id="date"
                        autoComplete="date"
                    />
                </Container>
                <Container>
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="forceUsed"
                        label="Force Used?"
                        id="forceUsed"
                        autoComplete="forceUsed"
                    />
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="arrestMade"
                        label="Arrest Made?"
                        id="arrestMade"
                        autoComplete="arrestMade"
                    />
                </Container>
                <Container>
                    <TextField
                        // onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="citizenId"
                        label="Citizen ID"
                        id="citizenId"
                        autoComplete="citizenId"
                        value={this.state.civilian.state_id}
                    />
                    <TextField
                        // onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="citizenName"
                        label="Citizen Name"
                        id="citizenName"
                        autoComplete="citizenName"
                        value={this.state.civilian.name}
                    />
                </Container>
                <Container>
                    <TextField
                        // onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        // required
                        // fullWidth
                        type="tel"
                        name="citizenPhoneNumber"
                        label="Citizen Phone Number"
                        id="citizenPhoneNumber"
                        autoComplete="citizenPhoneNumber"
                        value={this.state.civilian.phone_number}
                    />
                    <TextField
                        // onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        // required
                        // fullWidth
                        type="email"
                        name="citizenEmail"
                        label="Citizen Email"
                        id="citizenEmail"
                        autoComplete="citizenEmail"
                        value={this.state.civilian.email}
                    />
                </Container>
                <Container>
                    <TextField
                        // onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="citizenAddress"
                        label="Citizen Address"
                        id="citizenAddress"
                        autoComplete="citizenAddress"
                        value={this.state.civilian.address}
                    />
                    <TextField
                        // onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        // fullWidth
                        name="citizenAddress2"
                        label="Citizen Address"
                        id="citizenAddress2"
                        autoComplete="citizenAddress2"
                    />
                </Container>
                <Container>
                    <TextField
                        // onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="citizenCity"
                        label="City"
                        id="citizenCity"
                        autoComplete="citizenCity"
                        value={this.state.civilian.city}
                    />
                    <TextField
                        // onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        // fullWidth
                        name="citizenState"
                        label="State"
                        id="citizenState"
                        autoComplete="citizenState"
                        value={this.state.civilian.state}
                    />
                    <TextField
                        // onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        // required
                        // fullWidth
                        name="citizenZipCode"
                        label="Zip Code"
                        id="citizenZipCode"
                        autoComplete="citizenZipCode"
                        value={this.state.civilian.zip_code}
                    />
                </Container>
                <Container>
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        multiline
                        rows={10}
                        fullWidth
                        name="reason"
                        label="What is your reasoning for this civilian encounter?"
                        id="reason"
                        autoComplete="reason"
                    />
                </Container>
                <Container>
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        multiline
                        rows={10}
                        fullWidth
                        name="description"
                        label="Incident Description"
                        id="description"
                        autoComplete="description"
                    />
                </Container>
                <Container>
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        multiline
                        rows={10}
                        fullWidth
                        name="resolution"
                        label="What was the resolution?"
                        id="resolution"
                        autoComplete="resolution"
                    />
                </Container>
                <Container>
                    <Button
                        type='submit'
                        // fullWidth
                        variant='contained'
                        color='primary'
                    >Submit</Button>
                    <Button
                        type='reset'
                        // fullWidth
                        variant='contained'
                        color='primary'
                    >Reset Form</Button>
                </Container>
    
                </form>
            </Container>
        
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