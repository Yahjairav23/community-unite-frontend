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
            
            // this.props.currentUser === null ?

            <div>
                <form onSubmit={this.handleSubmitForm}>
                    <div class='fields'>
                        <div class='username'>
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="#071E22" d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></path>
                                <path fill="#071E22" d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></path>
                            </svg>
                            <input required class='user-input' onChange={this.fieldChange} type='username' id={inputLabels.inputValue} placeholder={inputLabels.labelValue} name={inputLabels.inputValue}/></div>
                        
                        <div class='password'>
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path fill="#071E22" d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
                            </svg>
                            <input required class='user-input' onChange={this.fieldChange} type='password' id='password' placeholder='Password' name='password'/></div>
                    </div>

                    <input class='signin-button' type='submit' value='Submit'/>

                </form>

            </div>
            
            
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


{/* <div class="container">
                <div class="row">
                <div class="col-md-10">
                
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
                    >
                        Sign In
                    </Button>
                    </form>
                    </div>
                </div>
            </div>
                :
                <Redirect to='/'/> */}