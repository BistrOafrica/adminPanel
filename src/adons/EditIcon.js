import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import { withStyles } from "@material-ui/core/styles";

const defaultToolbarStyles = {
  iconButton: {
  },
};

class EditButton extends React.Component {

  handleClick = () => {
    console.log("clicked on edit icon!");
  }

  render() {
    const { classes, that } = this.props;

    return (
      <React.Fragment>
        <Tooltip title={"bulk edit"}>
          <IconButton className={classes.iconButton} onClick={that.editTable}>
            <EditIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    );
  }

}

export default withStyles(defaultToolbarStyles, { name: "EditButton" })(EditButton);
