import { List, ListItem, RaisedButton } from 'material-ui'
import AppBar from 'material-ui/AppBar/AppBar'
import { MuiThemeProvider } from 'material-ui/styles'
import React from 'react'

function Confirm(props) {
    // const {}
    const back = () => {
        props.prevstep();
    }
    const next = () => {
        props.nextstep();
    }
    const { firstname, lastname, email, occupation, city, bio } = props.values;
    // const values = props.values


    const styles = {
        button: {
            margin: 30
        }
    }
    return (
        <MuiThemeProvider>
            <AppBar title="Confirm" />
            <List>
                <ListItem
                    primaryText='First name'
                    // secondaryText={props.values.firstname}
                    secondaryText={firstname}
                />
                <ListItem
                    primaryText='Last name'
                    secondaryText={lastname}
                />
                <ListItem
                    primaryText='email'
                    secondaryText={email}
                />
                <ListItem
                    primaryText='occupation'
                    secondaryText={occupation}
                />
                <ListItem
                    primaryText='city'
                    secondaryText={city}
                />
                <ListItem
                    primaryText='bio'
                    secondaryText={bio}
                />

            </List>



            <RaisedButton
                label='Back'
                secondary
                style={styles.button}
                onClick={back}
            />
            <RaisedButton
                label='confirm & continue'
                primary
                style={styles.button}
                onClick={next}
            />
        </MuiThemeProvider>
    )
}

export default Confirm
