import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { eventTypes } from "../DataTypes/eventTypes";
import { MenuItem } from "@material-ui/core"
import { withRouter, RouteComponentProps, useRouteMatch } from "react-router";
import { ListItemLink } from "../AppBar/ListItemLink";

interface SideMenuProps {
  openCloseStatus: boolean;
  nameSpace: string;
  clickAction?: React.Dispatch<React.SetStateAction<string>>;
}

export const drawerWidth = `240px`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 1
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
  })
);


const SideBar: React.FunctionComponent<SideMenuProps & RouteComponentProps>= React.memo((props) => {
  const classes = useStyles();
  let match = useRouteMatch(); 
  console.log('sidebar rendered')
  const [selected, setSelection] = React.useState<number>(0)
  const {  nameSpace, openCloseStatus, clickAction, history } = props;
  
  console.log('MATCH FROM SIDEBAR', match)
// These are side menu items
  const itemList = eventTypes[nameSpace] && eventTypes[nameSpace].map((eventType: string, index:number) => {
    const handleClick = (index:number) => {
        setSelection(index);

       
    }
    return (
      <MenuItem button onClick={() =>handleClick(index)} key={eventType} selected={selected === index} >
        <ListItemLink primary={eventType} key={eventType} to={match && (eventType === 'Featured'? `${match.url}`: `${match.url}/${eventType}`) || ''}/>
      </MenuItem>
    );
  });
  return (
    <>
    <Drawer
      open={openCloseStatus}
      variant="persistent"
      anchor="left"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
         <div className={classes.toolbar} />
      <List>{itemList}</List>
    </Drawer>
    </>
  );
});

export const SideBarWithRouter = withRouter(SideBar)