import React from 'react'; 
import { Box, Typography, makeStyles, Theme } from '@material-ui/core'

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
          Overview
        </Typography>
        <Box className={overviewClasses.root}>
            <ul>
                <li> Only gather 2 friends or more to enjoy a whole private room</li>
                <li>Specially designed party room for small gatherings and parties</li>
                <li>Contains 4 differently designed private party rooms for hire</li>
                <li> Conveinant Causeway Bay location</li>
  
            </ul>
      </Box>
      </Box>
    );
  };