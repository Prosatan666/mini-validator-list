import React from "react";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

import { links } from "../../menu";
import { t } from "../../services/i18nService";

const styles = theme => ({
  appBar: {
    zIndex: 1001,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${theme.drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  subTitle: {
    fontSize: "110%",
    marginLeft: "1rem"
  }
});

const getCurrentRouteName = pathname => {
  const currentRouteNames = links.filter(a => a.path === pathname);
  if (currentRouteNames.length > 0) {
    return `${t(currentRouteNames[0].res)}`;
  }
  return "N/A";
};

class MyToolbar extends React.Component {
  render() {
    const { classes, handleDrawerToggle, pathname } = this.props;

    const currentRouteName = getCurrentRouteName(pathname);

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              noWrap
              className={classes.subTitle}
            >
              {currentRouteName}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(MyToolbar);
