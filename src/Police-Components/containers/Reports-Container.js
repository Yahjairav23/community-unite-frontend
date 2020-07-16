import React from 'react'
import {connect} from 'react-redux'
import Report from '../../General-Components/Report-List-Item'

class ReportsContainer extends React.Component{

    render(){
        const descEscalations= this.props.escalatedReports.sort( ( a, b ) => { return Date.parse(b.date) - Date.parse(a.date) } )
        return(
            <div>
                {this.props.currentUser !== null ? 
                <div className='row'>

                    <div className='col-md-6'>
                        <h1 >Your Reports</h1>
                        <div className="d-flex justify-content-center flex-column">
                            {/* {this.props.currentUser.length > 0 ?
                            descReports.map(report => <Report report={report} key={report.id}/>) 
                            :
                            null} */}
                            {this.props.currentUser ? 
                            this.props.currentUser.reports.sort( ( a, b ) => { return Date.parse(b.date) - Date.parse(a.date)}).map(report => <Report report={report} key={report.id}/>) 
                            : 
                            <p>Nothing here</p>}

                        </div>
                    </div>

                    <div className='col-md-6'>
                        <h1>Reports In Escalation</h1>
                        <div className="d-flex justify-content-center flex-column">
                            {this.props.escalatedReports.length > 0 ?
                            descEscalations.filter(report => report.police_id === this.props.currentUser.id)
                            .map(escalation => <Report report={escalation} key={escalation.id}/>)
                            : 
                            null}
                        </div>
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