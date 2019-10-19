import React from 'react'; 
import { GridList, GridListTile, makeStyles, Theme } from '@material-ui/core';

const useGridList = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      flexWrap: "nowrap",
      // height: '400px',
      width: '100%', 
      height: '100%',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    }
  }));
  
  
  export const VenueGallery: React.FunctionComponent = () => {
    const gridListClasses = useGridList();
  
    const image = "https://www.gstatic.com/webp/gallery/1.jpg";
  
    return (
      <div className={gridListClasses.root}>
        <GridList className={gridListClasses.gridList} cellHeight={200} spacing={1}>
          <GridListTile key={image} rows={2} cols={1.9}>
            <img src={image} />
          </GridListTile>
          <GridListTile key={image} rows={2} cols={2}>
            <img src={image} />
          </GridListTile>
          <GridListTile key={image} rows={2} cols={2}>
            <img src={image} />
          </GridListTile>
        </GridList>
      </div>
    );
  };