import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { eventTypes } from "../FakeData/eventTypes";
import { MenuItem } from "@material-ui/core";
interface SideMenuProps {
  openCloseStatus: boolean;
  nameSpace: string;
  clickAction: React.Dispatch<React.SetStateAction<string>>;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
  })
);


export const SideBar: React.FunctionComponent<SideMenuProps> = props => {
  const classes = useStyles();
  const [selected, setSelection] = React.useState<number | null>(null)
  const { nameSpace, openCloseStatus, clickAction } = props;
  
 
// These are side menu items
  const itemList = eventTypes[nameSpace] && eventTypes[nameSpace].map((eventType: string, index:number) => {
    const handleClick = (index:number) => {
        setSelection(index);
        clickAction(eventType);
       
    }
    return (
      <MenuItem button onClick={() =>handleClick(index)} key={eventType} selected={selected === index}>
        <ListItemText primary={eventType}/>
      </MenuItem>
    );
  });
  return (
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
  );
};
