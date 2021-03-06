import React from 'react'
import {connect} from 'react-redux'
import ReportsList from '../../General-Components/Report-List-Item'

class AgencyProfileContainer extends React.Component {

  
    render(){
        return(
            <div>
                <div className='row'>

                    <div className='col-md-6'>
                        <h1 className='mini-header'>All Reports</h1> 
                        {this.props.reports.map(report => <ReportsList report={report} key={report.id}/> )}
                    </div>

                    <div className='col-md-6'>
                        <h1 className='mini-header'>Reports In Escalation</h1>
                        {this.props.escalatedReports.length > 0 ?
                        this.props.escalatedReports.map(escalation => <ReportsList report={escalation} key={escalation.id}/>)
                        : 
                        null}
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    reports: state.allReports,
    escalatedReports: state.escalatedReports
})

export default connect(mapStateToProps)(AgencyProfileContainer)