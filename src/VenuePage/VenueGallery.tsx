import React from "react";
import { makeStyles, Box, Button } from "@material-ui/core";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const useGalleryStyles = makeStyles(theme => ({
  galleryContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    overflow: "hidden",
    // minWidth: "500px",
    maxWidth: "600px",
    backgroundColor: theme.palette.background.paper,
    overflowX: "auto",
    whiteSpace: "nowrap"
  },
  individualImage: {
    marginRight: theme.spacing(1)
  },
  rightButton: {
    display: "flex",
    alignSelf: "center",
    color: "white",
    position: 'absolute',
    "&:hover": {
      background: theme.palette.action.hover
    },
    height: '100%',
    left: '88%'
  },
  leftButton: {
    display: "flex",
    alignSelf: "center",
    color: "white",
    position: 'absolute',
    "&:hover": {
      background: theme.palette.action.hover
    },
    height: '100%',
  }
}));

// TODO will be an array of images
export const imageList = [
  "https://www.gstatic.com/webp/gallery/1.jpg",
  "https://www.gstatic.com/webp/gallery/1.jpg",
  "https://www.gstatic.com/webp/gallery/1.jpg"
];

interface VenueGalleryProps {
  imageUrlList: string[];
}

export const VenueGallery: React.FunctionComponent<
  VenueGalleryProps
> = props => {
  const { imageUrlList } = props;
  const classes = useGalleryStyles();
  if (!imageUrlList.length) {
    return null;
  }
  const images = imageUrlList.map((imageUrl, index) => (
    <Box className={classes.individualImage}>
      <img src={imageUrl} />
    </Box>
  ));

  return (
    <>
      <Box display="flex" flexDirection="row" position="relative">
        <Button className={classes.leftButton}>
          <ChevronLeftIcon />
        </Button>
        <Box className={classes.galleryContainer}>{images}</Box>
        <Button className={classes.rightButton}>
          <ChevronRight />
        </Button>
      </Box>
    </>
  );
};
