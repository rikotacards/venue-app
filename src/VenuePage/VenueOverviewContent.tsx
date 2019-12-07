import React from 'react'; 
import { Box, Typography, makeStyles, Theme } from '@material-ui/core'
import { VenueIntro } from './VenueIntro';

const useOverviewStyles = makeStyles((theme: Theme) => ({
    root: {
      textAlign: "left"
    }
  }));

export const VenueOverviewContent: React.FunctionComponent = () => {
    const overviewClasses = useOverviewStyles();
    return (
      <Box>
        <Typography variant="h6" className={overviewClasses.root}>
     
        </Typography>
        <Box className={overviewClasses.root}>
            <ul>
                <li> <Typography variant='caption'>Only gather 2 friends or more to enjoy a whole private room</Typography></li>
                <li><Typography variant='caption'>Specially designed party room for small gatherings and parties</Typography></li>
                <li><Typography variant='caption'>Contains 4 differently designed private party rooms for hire</Typography></li>
                <li> <Typography variant='caption'>Conveinant Causeway Bay location</Typography></li>
            </ul>
            <VenueIntro />
      </Box>
      </Box>
    );
  };