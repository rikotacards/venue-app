import React from 'react'; 
import { VenuePreviewItem } from './VenuePreviewItem'
import { Grid } from '@material-ui/core';

interface VenueListProps {
    venueListData: string[]; 
}

// Receives an array of venues
// TODO instead of rendering {singleVenue} text, we need to render a component 
export const VenueList: React.FunctionComponent<VenueListProps> = (props) => {
    const { venueListData } = props; 
    const venueList = venueListData.map((venueName) => (
        <Grid item={true} xs={12} md={4} spacing={5}>
        <VenuePreviewItem venueName={venueName}/>
        </Grid>
    ))
    return (
    
        <Grid container={true}>
        {venueList}
        </Grid>
        
    )
}