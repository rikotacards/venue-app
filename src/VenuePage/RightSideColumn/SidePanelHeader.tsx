import React from 'react'; 
import { Box, Typography, makeStyles, Theme } from '@material-ui/core';

interface SidePanelHeaderProps {
    headerText: string;
}

const useHeaderClasses = makeStyles((theme: Theme) => ({
    root: {
      height: "25px",
      background: 'transparent',
      textAlign: 'left',
      alignItems: 'center',
      padding: theme.spacing(1),
      display: 'flex',
    },
    textColor: {
        color: 'black'
    }
  }));
  

export const SidePanelHeader: React.FunctionComponent<SidePanelHeaderProps> = (props) => {
    const { headerText } = props; 
    const headerClasses = useHeaderClasses();
    return (
        <Box className={headerClasses.root}>
            <Typography variant="button" className={headerClasses.textColor}>
                {headerText}
                
            </Typography>           
        </Box>
    )
}