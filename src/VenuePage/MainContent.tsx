import React from "react";
import {
  Tabs,
  Tab,
  Paper,
  Typography,
  Theme,
  makeStyles,
  Box
} from "@material-ui/core";
import { AmenitiesContainer } from "./AmenitiesContainer/AmenitiesContainer";
import { VenueOverviewContent } from "./VenueOverviewContent";
import { VenueGallery, imageList } from "./VenueGallery";
import { isMobile } from "../device";

const useStyles = makeStyles((theme: Theme) => ({
  mainBody: {
    border: 0,
  },
  venueName: {
    textAlign: "left",
    paddingTop: theme.spacing(1),
    margin: theme.spacing(0, 1)
  },
  tabsInfo: {
    margin: isMobile() ? theme.spacing(2) : 0,
    textAlign: 'left'
  }
}));

export const MainContent: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (newValue: number): void => {
    setValue(newValue);
  };
  // TODO remove manually imported imageList
  return (
    <>
      <VenueGallery imageUrlList={imageList} />
      <Typography variant="h6" className={classes.venueName}>
        Grand Hyatt
      </Typography>
      <Paper elevation={0}>
        <Tabs value={value} indicatorColor="primary" textColor="primary">
          <Tab label="overview" onClick={() => handleChange(0)} />
          <Tab label="Amenities" onClick={() => handleChange(1)} />
        </Tabs>
      </Paper>
      <Box className={classes.tabsInfo}>
        {value === 0 && <VenueOverviewContent />}
        {value === 1 && <AmenitiesContainer enableColumnLayout={true}/>}
      </Box>
    </>
  );
};
