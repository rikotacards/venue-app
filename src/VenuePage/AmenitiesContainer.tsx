import React from 'react'; 
import { Grid, Typography, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        marginTop: theme.spacing(2),
        display: 'flex', 
        justifyContent: 'space-between'
    }
}))

export const AmenitiesContainer: React.FunctionComponent = () => {
    const classes = useStyles()
    return (
        <>
        <Grid container xs={12} spacing={1} className={classes.container}>
            <Grid item>
                <Typography>
                    capacity
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    Space and Layout
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    Food and drinks
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    Technical Equipment
                </Typography>
            </Grid>
        </Grid>
        </>
    )
}