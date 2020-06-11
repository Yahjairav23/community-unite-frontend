import React from 'react'
import {Redirect} from 'react-router-dom'

const report = (props) => {
    return(
    
        
        <a href={`/reports/${props.report.id}`} class="list-group-item list-group-item-action" >{props.report.date} - {props.report.address}  {props.report.city}, {props.report.state} - Report ID#: {props.report.id}</a>
        
    )
}
// onClick={()=> <Redirect to={`http://localhost:3001/reports/${props.report.id}`}/>}
export default report