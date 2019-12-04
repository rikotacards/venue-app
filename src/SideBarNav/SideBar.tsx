import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { eventTypes } from "../config/eventTypes";
import { MenuItem } from "@material-ui/core"
import { withRouter, RouteComponentProps, useRouteMatch, useParams } from "react-router";
import { ListItemLink } from "../AppBar/ListItemLink";
import { makeUrlFriendly } from "../utils/makeUrlFriendly";
import { Params } from "../MainContent/MainContentContainer";

interface SideMenuProps  extends RouteComponentProps<Params> {
  openCloseStatus: boolean;
  clickAction?: React.Dispatch<React.SetStateAction<string>>;
}

export const drawerWidth = `240px`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      display:'flex',
      width: drawerWidth,
      flexShrink: 1
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
  })
);


const SideBar: React.FunctionComponent<SideMenuProps >= React.memo((props) => {
  const classes = useStyles();
  const nameSpace = props.match.params.functionType
  console.log('side bar parapsm', props)
  const [selected, setSelection] = React.useState<number>(0)
  const { openCloseStatus } = props;

  // These are side menu items
  const itemList = eventTypes[nameSpace] && eventTypes[nameSpace].map((eventType: string, index:number) => {
    const handleClick = (index:number) => {
        setSelection(index);
       
    }
    return (
      <MenuItem button onClick={() =>handleClick(index)} key={eventType} selected={selected === index} >
        <ListItemLink primary={eventType} key={eventType} to={ `${props.match.url}/${makeUrlFriendly(eventType)}` || ''}/>
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