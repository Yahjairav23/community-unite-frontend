import React from 'react'
import {connect} from 'react-redux'
import {fetchingCurrentUser} from '../../redux/actions'
import CommentForm from '../../Community-Components/components/Community-Comment-Form'
import CitizenReportsContainer from './Citizen-Reports-Container'
import Box from '@material-ui/core/Box';



class CitizenProfileContainer extends React.Component {
    // componentDidMount(){
    //     const token = localStorage.getItem("token")
    //     const userType = localStorage.getItem('userType')
    
    //     if(token){
    //         this.props.fetchingCurrentUser(token, userType)
    //     }
    // }

    render(){
        return(
            <Box component="span" p={[2,3,4]}>
                <div class="list-group">{this.props.currentUser !== null ? <CitizenReportsContainer/> : null}</div>
                <div>My Escalations</div>
                <div>Comment Submit</div>
                <CommentForm />
            </Box>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    userType: state.userType
  })
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       fetchingCurrentUser: (token, userType) => { dispatch( fetchingCurrentUser(token, userType) ) }
//     }
//   }

export default connect(mapStateToProps)(CitizenProfileContainer)