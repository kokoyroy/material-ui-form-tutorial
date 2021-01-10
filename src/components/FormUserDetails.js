import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = () => {
        // e.preventDefault();
        this.props.nextstep();
    }
   


    render() {
        const styles = {
            button: {
                margin: 30
            }
        }
        const { values } = this.props
        return (


            <MuiThemeProvider>
                <AppBar title="enter user details" />
                <TextField
                    hintText='enter ur first name'
                    floatingLabelText='Firstname'
                    onChange={this.props.handleChange('firstname')}
                    defaultValue={values.firstname}
                />
                <br />
                <TextField
                    hintText='enter ur last name'
                    floatingLabelText='Lastname'
                    onChange={this.props.handleChange('lastname')}
                    defaultValue={values.lastname}
                />
                <br />
                <TextField
                    hintText='enter ur email'
                    floatingLabelText='email'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                /><br />
                <RaisedButton
                    label='continue'
                    primary
                    style={styles.button}
                    onClick={this.continue}
                />
            </MuiThemeProvider>
        )
    }

}




export default FormUserDetails
