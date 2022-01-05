import React from "react";

class ViewSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            __html: ""
        }        
      }    
    
    componentDidMount() {
        fetch(this.props.schedule)
        .then(resp => {
            return resp.text();
        })
        .then(content => {
            this.setState({
                __html: content
            });
        })
        .catch(err => {
            // handle the error
        });        
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={this.state} />
        )
    }
}

export default ViewSchedule;