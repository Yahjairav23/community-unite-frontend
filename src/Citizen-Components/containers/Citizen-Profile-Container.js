import React from 'react'
import {connect} from 'react-redux'
import CommentForm from '../../Community-Components/components/Community-Comment-Form'
import CitizenReportsContainer from './Citizen-Reports-Container'
import Report from '../../General-Components/Report-List-Item'




class CitizenProfileContainer extends React.Component {
    render(){
        const descReports = this.props.escalatedReports.sort( ( a, b ) => { return Date.parse(b.date) - Date.parse(a.date) } )
        
        return(
            <div className='container-fluid'>
                    {this.props.currentUser !== null ? 

                    <div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="list-group"><CitizenReportsContainer/> </div>
                            </div>


                            <div className='col-md-6'>
                                <h1 className="sm-form-title">Reports In Escalation</h1>
                                <div className="d-flex justify-content-center flex-column">
                                    {this.props.escalatedReports.length > 0 ?
                                    descReports.filter(report => report.citizen_id === this.props.currentUser.id && this.props.escalations.find(escalation => escalation.report_id === report.id))
                                    .map(report => (
                                    <Report report={report} key={report.id}/>
                                    )
                                    )
                                    : 
                                    null}
                                </div>
                            </div>
                        </div>
                    
                        <div className="divider"></div>

                        <div>Comment Submit</div>
                        <CommentForm />
                    </div>

                : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    userType: state.userType,
    escalatedReports: state.escalatedReports,
    allReports: state.allReports,
    escalations: state.escalations
  })

export default connect(mapStateToProps)(CitizenProfileContainer)