import React from 'react'; 
import { Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles';


interface StatsProps {
    capacitySitting?: number; 
    capacityStanding?: number; 
    budgetPerHead?: number; 
    address?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        alignText: 'left'
    }
}))

export const VenueStatsContainer: React.FunctionComponent<StatsProps> = (props) => {
    const { address, capacitySitting, capacityStanding, budgetPerHead} = props;
    const classes = useStyles();
    
    return (
        <>
        <Typography classes={classes}  variant="body2" color="textSecondary" component="p">
            Price/head: {budgetPerHead}
        </Typography>
        <Typography classes={classes} variant="body2" color="textSecondary" component="p">
            address: {address}
        </Typography>
        <Typography classes={classes} variant="body2" color="textSecondary" component="p">
            Capactiy Standing: {capacityStanding}
        </Typography>
        <Typography classes={classes} variant="body2" color="textSecondary" component="p">
            Capacity Sitting: {capacitySitting}
        </Typography>
        </>
    )
}