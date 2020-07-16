import React from 'react'
import {connect} from 'react-redux'

const ReportsListItem = (props) => {
    const cardLink = props.path ? null : `/reports/${props.report.id}`
    return (
        <div className="col px-md-5">
            <a href={cardLink} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
            <strong className="mb-1 text-capitalize">{props.report.location}</strong>
            <small className="text-muted">{new Date(props.report.date).toDateString()}</small>
            </div>
            {props.userType === "police" ? 
                <p className="mb-1 text-capitalize"><strong>Location: </strong>{props.report.location}  {props.report.city}, {props.report.state}</p>
                :
                null
            }
            <div className="dropdown-divider"></div>
            <p className="mb-1"><strong>Description Of Incident: </strong><br/>{props.report.incident_description}</p>
            <p className="mb-1"><strong>How The Issue Was Resolved: </strong><br/>{props.report.resolution}</p>
            </a>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userType: state.userType
})

export default connect(mapStateToProps)(ReportsListItem)