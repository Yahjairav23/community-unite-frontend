import React from 'react'
import LoginForm from '../General-Components/Login-Form'
import {setUserType} from '../redux/actions'
import {connect} from 'react-redux'

class loginContainer extends React.Component {

    setUserType = (userType) => {
        this.props.setUserType(userType)
    }
   
    render(){
        return(
            <div className='login-container'>

                <div className='login-div'>
                    <div className="user-buttons">
                        <button onClick={() => this.setUserType('citizen')} className='signin-option-button'>Citizen</button>
                        <button onClick={() => this.setUserType('oversightAgency')} className='signin-option-button'>Oversight Agency</button>
                        <button onClick={() => this.setUserType('police')} className='signin-option-button'>Police</button>
                    </div>

                    <div className='login-title'><strong>YOU</strong>NITE</div>
                    <div className='login-sub'><small>LOGIN</small></div>
                    {this.props.userType !== null ? <LoginForm/> : <div className='login-message'>Please Select Your User Type Above.</div>}
                </div>
            </div>
            
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


