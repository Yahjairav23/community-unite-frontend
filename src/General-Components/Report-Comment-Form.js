import React from 'react'

class ReportCommentForm extends React.Component {
    constructor(){
        super()
        this.state={

        }
    }

    handleForm = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.updateComment(this.state)
                    e.target.reset()
                }}>
                    <input onChange={this.handleForm} type='text' name='comment'/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

export default ReportCommentForm