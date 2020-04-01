import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  title: {}
};

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}>
              Lead Manager
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
