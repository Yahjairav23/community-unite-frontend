import React from 'react'

const reportsListItem = (props) => {
    return (
        <div>
            <h3>Community Reports List Item</h3>
            <p>Date: {props.report.date}</p>
            <p>Location: {props.report.location}</p>
            <p>Description Of Incident: {props.report.incident_description}</p>
            <p>How The Issue Was Resolved: {props.report.resolution}</p>

        </div>
    )
}


export default reportsListItem