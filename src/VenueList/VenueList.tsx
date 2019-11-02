import React from 'react'; 
import { VenuePreviewItem } from './VenuePreviewItem'
import { Grid, makeStyles, Box } from '@material-ui/core';
import { isMobile } from '../device';

interface VenueListProps {
    venueListData: string[]; 
    isOpen? : boolean;
}

const useStyles = makeStyles((theme) => ({
    overlay: {
        background: (isOpen: boolean) => isMobile() ? (isOpen  ? 'black': 'transparent') : 'transparent',
    },
    venueListContainer: {
        opacity: (isOpen: boolean) => isMobile() ? (isOpen ? 0.3 : 1) : 1
    }
}))

// Receives an array of venues
// TODO instead of rendering {singleVenue} text, we need to render a component 
export const VenueList: React.FunctionComponent<VenueListProps> = (props) => {
    const { venueListData, isOpen } = props; 
    const classes = useStyles(isOpen);
    const venueList = venueListData.map((venueName) => (
        <Grid item={true} xs={12} md={4} spacing={5}>
        <VenuePreviewItem venueName={venueName}/>
        </Grid>
    ))
    return (
        <Box className={classes.overlay}>
        <Grid container className={classes.venueListContainer}>
        {venueList}
        </Grid>
        </Box>
        
    )
}