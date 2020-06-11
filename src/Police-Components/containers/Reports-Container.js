import React from 'react'
import {connect} from 'react-redux'
import {fetchingCurrentUser} from '../../redux/actions'
import Report from '../../General-Components/Report-List-Item'

class ReportsContainer extends React.Component{

    // componentDidMount(){
    //     const token = localStorage.getItem("token")
    //     if(token){
    //         this.props.fetchingCurrentUser(token, this.props.userType)
    //     }
    // }

    render(){
        // debugger
        return(
            <div>
                <h2>Your Reports:</h2>

                {this.props.currentUser !== null ? this.props.currentUser.reports.map(report => <Report report={report} key={report.id}/>) : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         fetchingCurrentUser: (token, userType) => { dispatch( fetchingCurrentUser(token, userType) ) }
//     }
// }
// , mapDispatchToProps
export default connect(mapStateToProps)(ReportsContainer)