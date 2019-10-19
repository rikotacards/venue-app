import React from 'react'; 
import { Grid, Typography, Divider } from '@material-ui/core';



export const AmenitiesContainer: React.FunctionComponent = () => {
    return (
        <>
        <Typography variant={'h6'}>Amenities</Typography>
        <Divider/>
        <Grid container xs={12} spacing={1}>
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