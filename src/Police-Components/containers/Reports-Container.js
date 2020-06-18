import React from 'react'
import {connect} from 'react-redux'
import Report from '../../General-Components/Report-List-Item'

class ReportsContainer extends React.Component{

    constructor(){
        super()
        this.state={
            sortedReports: [],
            sortedEscalation: []
        }
    }
  
    componentDidMount =() => {
        if(this.props.currentUser){
            this.setState({sortedReports: this.props.currentUser.reports.sort( ( a, b ) => { return Date.parse(b.date) - Date.parse(a.date) } ) })
        }
        if(this.props.escalatedReports){
            this.setState({sortedEscalations: this.props.escalatedReports.sort( ( a, b ) => { return Date.parse(b.date) - Date.parse(a.date) } ) })
        }
    }
    
    render(){

        return(
            <div>
                {this.props.currentUser !== null ? 
                <div class='row'>

                    <div class='col-md-6'>
                        <h1 >Your Reports</h1>
                        <div class="d-flex justify-content-center flex-column">
                            {this.state.sortedReports.map(report => <Report report={report} key={report.id}/>) }
                        </div>
                    </div>

                    <div class='col-md-6'>
                        <h1>Reports In Escalation</h1>
                        <div class="d-flex justify-content-center flex-column">
                            {this.props.escalatedReports.length > 0 ?
                            this.state.sortedEscalation.filter(report => report.police_id === this.props.currentUser.id)
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