import React from 'react'
import {connect} from 'react-redux'

const ReportsListItem = (props) => {
    const cardLink = props.path ? null : `/reports/${props.report.id}`
    return (
        <div class="col px-md-5">
            <a href={cardLink} class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
            <strong class="mb-1 text-capitalize">{props.report.location}</strong>
            <small class="text-muted">{new Date(props.report.date).toDateString()}</small>
            </div>
            {props.userType === "police" ? 
                <p class="mb-1 text-capitalize"><strong>Location: </strong>{props.report.location}  {props.report.city}, {props.report.state}</p>
                :
                null
            }
            <div class="dropdown-divider"></div>
            <p class="mb-1"><strong>Description Of Incident: </strong><br/>{props.report.incident_description}</p>
            <p class="mb-1"><strong>How The Issue Was Resolved: </strong><br/>{props.report.resolution}</p>
            </a>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userType: state.userType
})

export default connect(mapStateToProps)(ReportsListItem)