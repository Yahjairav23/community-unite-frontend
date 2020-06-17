import React from 'react'
import {connect} from 'react-redux'
import Report from '../../General-Components/Report-List-Item'

class ReportsContainer extends React.Component{
  
    render(){
        return(
            <div>
                {this.props.currentUser !== null ? 
                <div>
                    <h2 >Your Reports</h2>
                    <div class="d-flex justify-content-center flex-column">
                        {this.props.currentUser.reports.map(report => <Report report={report} key={report.id}/>) }
                    </div>

                    <h1>Reports In Escalation</h1>
                    <div class="d-flex justify-content-center flex-column">
                        {this.props.escalatedReports.length > 0 ?
                        this.props.escalatedReports.filter(report => report.police_id === this.props.currentUser.id)
                        .map(escalation => <Report report={escalation} key={escalation.id}/>)
                        : 
                        null}
                    </div>
                </div>

                : null}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    escalatedReports: state.escalatedReports
})

export default connect(mapStateToProps)(ReportsContainer)