import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  functionTypes,
  displayFunctionTypes
} from "../config/functionTypes";
import { isMobile } from "../device";

import { ButtonLink } from "./ButtonLink";
import { useRouteMatch, RouteComponentProps } from "react-router";

const useButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    color: "white"
  }
}));

interface TopAppBarProps {
  toggleSideNav?: () => void; 
  openCloseSideNav?: () => void; 

}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    hide: {
      display: "none"
    },
    content: {
      flexGrow: 1,
      padding: isMobile() ? 0 : theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth,
      marginRight: 0
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    toolbar: theme.mixins.toolbar
  })
);


export const TopAppBar: React.FunctionComponent<TopAppBarProps> = (props) => {
  const classes = useStyles();
  const { toggleSideNav, openCloseSideNav,  } = props;
  const buttonClasses = useButtonStyles();
 const functionButtons = functionTypes.map(functions => {
    return (
      <ButtonLink
        to={`/${functions}`}
        primary={displayFunctionTypes[functions]}
        className={buttonClasses}
        onClick={toggleSideNav}
      />
    );
  });
  // TODO convert button to tabs
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton
            onClick={openCloseSideNav}
            aria-label="open drawer"
            edge="start"
            color="inherit"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          {functionButtons}
        </Toolbar>
      </AppBar>
    </div>
  );
};

