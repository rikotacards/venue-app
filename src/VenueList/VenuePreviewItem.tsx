// Each venue Item or preview will be a card
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { VenueStatsContainer } from "./VenueItemStats";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
// import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    // width: "100%",
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  media: {
    height: 240
  },
  cardContent: {
    textAlign: "left"
  },
  cardActionArea: {
    width: "100%"
  },
  statsTextAlign: {
    textAlign: "left"
  }
}));

interface VenuePreviewItemProps {
  venueName: string; // TODO use venue IDs in the future
}

export const VenuePreviewItem: React.FunctionComponent<
  VenuePreviewItemProps
> = props => {
  // TODO Button on click action open new tab

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          className={classes.media}
          image="https://www.gstatic.com/webp/gallery/1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.venueName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <VenueStatsContainer venueName={props.venueName} />
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button component={Link} to="/what">
          Details
        </Button>

        <Button size="small" color="primary">
          Contact Venue Through Us (15% Off)
        </Button>
      </CardActions>
    </Card>
  );
};
