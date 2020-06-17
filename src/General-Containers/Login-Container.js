import React from 'react'
import LoginForm from '../General-Components/Login-Form'
import {setUserType} from '../redux/actions'
import {connect} from 'react-redux'

import {Box, Button, Container} from '@material-ui/core';


class loginContainer extends React.Component {
   
    render(){
        return(
            // this.props.userType === '' ?
            <Container component='main' maxWidth='xs'>

                {this.props.userType ? <LoginForm/> : null}
                <br/>
                <div class="container">
                <div class="row">
                <div class="col-md-10 align-self-center">
                <Button
                    onClick={()=>{this.props.setUserType('citizen')}}
                    variant="contained" 
                    color='primary'
                    size='large'
                >
                    Citizen
                </Button>
                {/* <br/>
                <br/> */}
                <Button
                    onClick={()=>{this.props.setUserType('police')}}
                    variant="contained" 
                    color='primary'
                    size='large'
                >
                    Police
                </Button>
                <Button
                    onClick={()=>{this.props.setUserType('oversightAgency')}}
                    variant="contained" 
                    color='primary'
                    size='large'
                >
                    Oversight Agency
                </Button>
                </div>
                </div>
                </div>
                <br/>
                <br/>
                {/* <Button
                    onClick={()=>{this.props.setUserType('policeDepartment')}}
                    variant="contained" 
                    color='primary'
                    size='large'
                >
                    Police Department
                </Button> */}
                
            </Container>
            // :
        )
    }
}

const mapStateToProps = (state) => ({
    userType: state.userType
})

const mapDispatchToProps = (dispatch) => {
    return{
        setUserType: (type)=>{dispatch(setUserType(type))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(loginContainer) 
