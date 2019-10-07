import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { SideBarWithRouter } from "../SideBarNav/SideBar";
import { MainContentContainer } from "../MainContent/MainContentContainer";
import clsx from "clsx";
import { functionTypes } from "../FakeData/functionTypes";

const useButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    color: "white"
  }
}));

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
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
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


export const DenseAppBar = () => {

  const classes = useStyles();
  const buttonClasses = useButtonStyles();
  const [isOpen, setOpenClose] = React.useState(true);
  const [eventType, setEventType] = React.useState('Annual Dinner') // TODO
  const [functionSelected, setFunction] = React.useState("Corporate Events");
  
  const handleFunctionClick = (functionName: string) => {
    setFunction(functionName);
  };

  const handleClick = () => {
    setOpenClose(!isOpen);
  };
  const functionButtons = functionTypes.map(functions => {
    return (
      <Button
        classes={buttonClasses}
        key={functions}
        onClick={() => handleFunctionClick(functions)}
      >
        {functions}
      </Button>
    );
  });
  // TODO convert button to tabs
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton
            onClick={handleClick}
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

        <SideBarWithRouter openCloseStatus={isOpen} nameSpace={functionSelected} clickAction={setEventType}/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isOpen
        })}
      >
        <div className={classes.toolbar} />
        <MainContentContainer eventType={eventType} />
      </main>
    </div>
  );
};
