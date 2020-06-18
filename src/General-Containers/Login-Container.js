import React from 'react'
import LoginForm from '../General-Components/Login-Form'
import {setUserType} from '../redux/actions'
import {connect} from 'react-redux'

import {Box, Button, Container} from '@material-ui/core';


class loginContainer extends React.Component {

    // constructor(){
    //     super()
    //     this.state={
    //         userType: null
    //     }
    // }

    // componentDidMount = () => {
    //     this.props.setUserType(this.props.userType)
    // }

    setUserType = (userType) => {
        this.props.setUserType(userType)
    }
   
    render(){
        return(
            <div class='login-container'>

                <div class='login-div'>
                    <div class="user-buttons">
                        <button onClick={() => this.setUserType('citizen')} class='signin-option-button'>Citizen</button>
                        <button onClick={() => this.setUserType('oversightAgency')} class='signin-option-button'>Oversight Agency</button>
                        <button onClick={() => this.setUserType('police')} class='signin-option-button'>Police</button>
                    </div>

                    <div class='login-title'><strong>YOU</strong>NITE</div>
                    <div class='login-sub'><small>LOGIN</small></div>
                    {this.props.userType !== null ? <LoginForm/> : <div class='login-message'>Please Select Your User Type Above.</div>}
                </div>
            </div>
            // this.props.userType === '' ?
            // <Container component='main' maxWidth='xs'>

            //     {this.props.userType ? <LoginForm/> : null}
            //     <br/>
            //     <div class="container">
            //     <div class="row">
            //     <div class="col-md-10 align-self-center">
            //     <Button
            //         onClick={()=>{this.props.setUserType('citizen')}}
            //         class='btn animated-btn'
            //     >
            //         Citizen
            //     </Button>
                
            //     <Button
            //         onClick={()=>{this.props.setUserType('police')}}
            //         class='btn animated-btn'
            //     >
            //         Police
            //     </Button>
            //     <Button
            //         onClick={()=>{this.props.setUserType('oversightAgency')}}
            //         class='btn animated-btn'
            //     >
            //         Oversight Agency
            //     </Button>
            //     </div>
            //     </div>
            //     </div>
            //     <br/>
            //     <br/>
               
            // </Container>
          
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



// return(
//     // this.props.userType === '' ?
//     <Container component='main' maxWidth='xs'>

//         {this.props.userType ? <LoginForm/> : null}
//         <br/>
//         <div class="container">
//         <div class="row">
//         <div class="col-md-10 align-self-center">
//         <Button
//             onClick={()=>{this.props.setUserType('citizen')}}
//             class='btn animated-btn'
//         >
//             Citizen
//         </Button>
//         {/* <br/>
//         <br/> */}
//         <Button
//             onClick={()=>{this.props.setUserType('police')}}
//             class='btn animated-btn'
//         >
//             Police
//         </Button>
//         <Button
//             onClick={()=>{this.props.setUserType('oversightAgency')}}
//             class='btn animated-btn'
//         >
//             Oversight Agency
//         </Button>
//         </div>
//         </div>
//         </div>
//         <br/>
//         <br/>
//         {/* <Button
//             onClick={()=>{this.props.setUserType('policeDepartment')}}
//             variant="contained" 
//             color='primary'
//             size='large'
//         >
//             Police Department
//         </Button> */}
        
//     </Container>
//     // :
// )