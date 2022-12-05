
import { useState } from "react";
import clsx from "clsx";
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { ChevronLeft, Menu as MenuIcon } from "@material-ui/icons";
import DashboardIcon from "../../assets/dashboard-icon.png";
import { useStyles } from "./styles";

export default function Menu(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOnClick = () => {
    setStatus(!status);
    props.changeStatus(!status);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            {open ?
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeft />
              </IconButton> :
              <IconButton onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
            }
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem button onClick={handleOnClick} className={status? classes.active : classes.notActive}>
          <ListItemIcon>
            <IconButton >
              <img src={DashboardIcon} alt="icon" />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};