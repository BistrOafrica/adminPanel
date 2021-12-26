import React from 'react-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function CityMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [value, setValue]=React.useState("");

  const handleChange = e=> setValue(e.target.value);
  console.log(value)
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className='cityMenu' style={{backgroundColor:'white', margin:'20px', verticalAlign:'middle'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Select City
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onChange={handleChange}
      >
        <MenuItem onClick={handleClose} value='nrb'>Nairobi</MenuItem>
        <MenuItem onClick={handleClose} value='msa'>Mombasa</MenuItem>
        <MenuItem onClick={handleClose} value='vegas'>Nakuru</MenuItem>
      </Menu>
    </div>
  );
}