import React, { Component } from 'react'
import Confirm from './Confirm';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails'
export class UserForm extends Component {
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }


    //proceed to the next step

    nextstep = () => {
        let { step } = this.state;
        this.setState({ step: ++step })
    }
    //proceed to the prev step
    prevstep = () => {
        let { step } = this.state;
        this.setState({ step: --step })
    }

    //handle fields change 
    handleChange = (input) => {
        return (e) => {
            this.setState({ [input]: e.target.value })
        }
    }



    render() {
        const { step } = this.state;
        const { firstname, lastname, email, occupation, city, bio } = this.state;
        const values = { firstname, lastname, email, occupation, city, bio }
       
        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextstep={this.nextstep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextstep={this.nextstep}
                        prevstep={this.prevstep}
                        handleChange={this.handleChange}
                        values={values}

                    />
                )
            case 3:
                return (
                    <Confirm
                        nextstep={this.nextstep}
                        prevstep={this.prevstep}
                        values={values}
                    />
                )
            case 4:
                return (
                    <h1>Success</h1>
                )
        }
    }
}

export default UserForm
