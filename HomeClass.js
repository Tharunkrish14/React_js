import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeClass extends Component {
    constructor(props) {
        super(props);
        this.state={
            college:'MKCE',
            department:'AIDS'
        }

    }
    ChangeDepartment=() => {
        this.setState({department:'AIML'})

    

    render() {
        return (
            <div>
                <h4>College Name:{this.state.college}</h4>
                <h4>Department Name:{this.state.department}</h4>
                <button onClick={this.ChangeDepartment}>Change Departmenst Name</button>

            </div>
        );
    }
}

HomeClass.propTypes = {

};

export default HomeClass;