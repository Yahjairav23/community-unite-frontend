import React from 'react'
import {connect} from 'react-redux'

const ReportsListItem = (props) => {
    return (
        <div>
            <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{props.report.location}</h5>
            <small class="text-muted">Date: {props.report.date}</small>
            </div>
            {props.userType === "police" ? 
                <p class="mb-1">Location: {props.report.location}  {props.report.city}, {props.report.state}</p>
                :
                null
            }
            <p class="mb-1">Description Of Incident: {props.report.incident_description}</p>
            <p class="mb-1">How The Issue Was Resolved: {props.report.resolution}</p>
            </a>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userType: state.userType
})

export default connect(mapStateToProps)(ReportsListItem)