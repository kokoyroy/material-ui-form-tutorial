import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, RaisedButton, TextField } from 'material-ui'




function FormPersonalDetails(props) {
    const back = () => {
        props.prevstep();
    }
    const next = () => {
        props.nextstep();
    }

    const styles = {
        button: {
            margin: 30
        }
    }

    return (
        <>
            <MuiThemeProvider>
                <AppBar title="enter personal details" />
                <br />
                <TextField
                    hintText='enter ur occupation'
                    floatingLabelText='occupation'
                    onChange={props.handleChange('occupation')}
                    defaultValue={props.values.occupation}

                />
                <br />
                <TextField
                    hintText='enter ur city'
                    floatingLabelText='city'
                    onChange={props.handleChange('city')}
                    defaultValue={props.values.city}
                />
                <br />
                <TextField
                    hintText='enter ur bio'
                    floatingLabelText='bio'
                    onChange={props.handleChange('bio')}
                    defaultValue={props.values.bio} 
                    />
                <br />
                <RaisedButton
                    label='Back'
                    secondary
                    style={styles.button}
                    onClick={back}
                />
                <RaisedButton
                    label='continue'
                    primary
                    style={styles.button}
                    onClick={next}
                />

            </MuiThemeProvider>
        </>
    )
}

export default FormPersonalDetails
