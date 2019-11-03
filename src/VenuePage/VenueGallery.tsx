import React from "react";
import { makeStyles, Box, Button, LinearProgress } from "@material-ui/core";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { isMobile } from "../device";

const useGalleryStyles = makeStyles(theme => ({
  galleryContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    overflow: "hidden",
    // minWidth: "500px",
    maxWidth: isMobile()?  "100%": "600px",
    maxHeight: isMobile() ? '250px': '370px',
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  },
  individualImage: {
    maxWidth: "100%",
    objectFit: 'cover'
  },
  rightButton: {
    display: "flex",
    alignSelf: "center",
    color: "white",
    position: "absolute",
    "&:hover": {
      background: theme.palette.action.hover
    },
    height: "100%",
    left: isMobile() ? "85%" : '88%'
  },
  leftButton: {
    display: "flex",
    alignSelf: "center",
    color: "white",
    position: "absolute",
    "&:hover": {
      background: theme.palette.action.hover
    },
    height: "100%"
  },

}));

// TODO will be an array of images
export const imageList = [
  "https://www.gstatic.com/webp/gallery/1.jpg",
  "https://www.gstatic.com/webp/gallery/2.jpg",
  "https://www.gstatic.com/webp/gallery/4.jpg"
];

interface VenueGalleryProps {
  imageUrlList: string[];
}

export const VenueGallery: React.FunctionComponent<
  VenueGalleryProps
> = props => {
  const [imageIndex, changeIndex] = React.useState(0);
  const { imageUrlList } = props;
  const linearProgressPercentage = (imageIndex+1)/3*100

  const nextImageButton = () => {
    if(imageIndex === imageUrlList.length -1){
      return
    }
    changeIndex(imageIndex + 1);
  };

  const prevImageButton = () => {
    if(imageIndex === 0 ){
      return
    }
    changeIndex(imageIndex - 1);
  };
  

  const classes = useGalleryStyles();
  if (!imageUrlList.length) {
    return null;
  }

  return (
    <>
      <Box display="flex" flexDirection="row" position="relative" width='100%'>
        <Button className={classes.leftButton} onClick={prevImageButton}>
          <ChevronLeftIcon />
        </Button>
        <Box className={classes.galleryContainer}>
        
            <img src={imageUrlList[imageIndex]} className={classes.individualImage} />
         

        </Box>
        {/* <Box className={classes.galleryContainer}>{clickViewImage}</Box> */}
        <Button className={classes.rightButton} onClick={nextImageButton}>
          <ChevronRight />
        </Button>
      </Box>
        <LinearProgress variant="determinate" value={linearProgressPercentage} />
    </>
  );
};
