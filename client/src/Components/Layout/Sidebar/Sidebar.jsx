import React, {useEffect, useState} from "react";
import {Drawer, IconButton, List} from "@material-ui/core";
import {ArrowBack as ArrowBackIcon, Home as HomeIcon,} from "@material-ui/icons";
import {useTheme} from "@material-ui/styles";
import {withRouter} from "react-router-dom";
import classNames from "classnames";
// styles
import useStyles from "./styles";
// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
// context
import {useAppDispatch, useAppState,} from "../../../Context/AppContext";

const structure = [
  {id: 0, label: "Dashboard", link: "/dashboard", icon: <HomeIcon/>},
];

function Sidebar({location}) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var {isSidebarOpened} = useAppState();
  var dispatch = useAppDispatch();

  function toggleSidebar() {
    dispatch({
      type: "TOGGLE_SIDEBAR",
    });
  }

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar}/>
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar()}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
