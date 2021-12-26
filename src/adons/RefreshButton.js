import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RefreshIcon from "@mui/icons-material/Refresh";
import { withStyles } from "@material-ui/core/styles";

const defaultToolbarStyles = {
  iconButton: {
  },
};

class RefreshButton extends React.Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClick = () => {
    console.log("clicked on add icon!");
    this.props.that.funcs.refresh();
  }

  render() {
    const { classes, addForm } = this.props;
    const { open } = this.props;

    return (
      <React.Fragment>
        <Tooltip title={"refresh"}>
          <IconButton className={classes.iconButton} onClick={this.handleClick}>
            <RefreshIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    );
  }

}

export default withStyles(defaultToolbarStyles, { name: "RefreshButton" })(RefreshButton);
