import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
/*
import AddIcon from "@mui/icons-material/Add";
*/
import 'boxicons'
import { withStyles } from "@material-ui/core/styles";

const defaultToolbarStyles = {
  iconButton: {
  },
};

class AddButton extends React.Component {

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
    this.props.that.setState({ addFormOpen: !this.props.that.state.addFormOpen });
  }

  render() {
    const { classes, addForm } = this.props;
    const { open } = this.props;

    return (
      <React.Fragment>
        <Tooltip title={"Add Item"}>
          <IconButton className={classes.iconButton} onClick={this.handleClick}>
            <box-icon color='lightseagreen' className={classes.deleteIcon} name="trash" type="regular"></box-icon>
          </IconButton>
        </Tooltip>
      </React.Fragment>
    );
  }

}

export default withStyles(defaultToolbarStyles, { name: "AddButton" })(AddButton);
