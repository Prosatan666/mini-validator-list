import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Toolbar from "../../components/Navigation/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.drawerWidth
    }
  },
  toolbar: theme.mixins.toolbar,
  innerContent: {
    maxWidth: "724px",
    margin: "0 auto"
  }
});

class Layout extends React.Component {
  state = {
    drawerOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ drawerOpen: !state.drawerOpen }));
  };

  render() {
    const { classes, title, children, pathname } = this.props;
    const { drawerOpen } = this.state;

    return (
      <div className={classes.root}>
        <SideDrawer
          title={title}
          open={drawerOpen}
          handleDrawerToggle={this.handleDrawerToggle}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Toolbar
            title={title}
            handleDrawerToggle={this.handleDrawerToggle}
            pathname={pathname}
          />
          <div className={classes.innerContent}>{children}</div>
        </main>
      </div>
    );
  }
}
export default withStyles(styles)(Layout);
