import React from 'react'
import {fetchingCurrentUser, setUserType} from '../redux/actions'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'



//Material-ui Styling imports
import {Container, Avatar, Typography, TextField, Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'





class loginForm extends React.Component {

    constructor(){
        super()
        this.state={
            
        }
    }

    fieldChange = (event) => {
        // debugger
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmitForm = (e) => {
        e.preventDefault()
        const obj = {...this.state, userType: this.props.userType}
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => {
            // console.log(data.user_data)
            if(data.error_message){
                alert(data.error_message)
            }else{
                localStorage.setItem('token', data.token)
                localStorage.setItem('userType', this.props.userType)
                //update current user
                this.props.fetchingCurrentUser(data.token, this.props.userType)
            }
        })
    }

    labels = (type) => {
        const values = {
            labelValue: '',
            inputValue: ''
        }
        
        if(this.props.userType === 'police' ){
            values.inputValue = 'badge_number'
            values.labelValue = 'Badge Number'
        }else{
            values.inputValue = 'email'
            values.labelValue = 'Email Address'
        }
        return values
    }

    render(){

        const inputLabels = this.labels(this.props.userType)
        return(
            
            this.props.currentUser === null ?
            <div class="container">
                <div class="row">
                {/* <div class="col"></div> */}
                <div class="col-md-10">
                    {/* <Avatar>
                        <LockOutlinedIcon/>
                    </Avatar> */}
                    <Typography component="h1" varient="h5">
                        Sign In
                    </Typography>

                    <form onSubmit={this.handleSubmitForm}>
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id={inputLabels.inputValue}
                        label={inputLabels.labelValue}
                        name={inputLabels.inputValue}
                        autoComplete={inputLabels.inputValue}
                        autoFocus
                    />
                    <TextField
                        onChange={this.fieldChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    // class={classes.submit}
                    >
                        Sign In
                    </Button>
                    </form>
                    </div>
                </div>
                    {/* <div class="col"></div> */}
            </div>
                :
            // this.props.currentUser.state_id ?
            //     <Redirect to='/citizen/profile'/> 
            //     :
            // this.props.currentUser.badge_number ?
            //     <Redirect to='/report-form'/>
            //     :
            // !this.props.currentUser.gender ?
            //     <Redirect to='/agency/profile'/>
            //     :
                <Redirect to='/'/>
            
        )
    }
}

const mapStateToProps = (state) => ({
    userType: state.userType,
    currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => {
    return {
        setUserType: (type) => {dispatch(setUserType(type))},
        fetchingCurrentUser: (token, userType) => { dispatch(fetchingCurrentUser(token, userType))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginForm)
