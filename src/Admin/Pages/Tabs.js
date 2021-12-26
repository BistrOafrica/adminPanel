import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs({titleOne,icon1,Content,titleTwo,icon2,ContentTwo}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "transparent",
                display: "flex",
                height: "fit-content"
            }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs"
                sx={{ borderRight: 1,
                    borderColor: "divider",

                    '& .MuiButtonBase-root':{
                        textAlign:'left',
                        padding:'10px 20px',
                        margin:'0 20px 5px 0',
                        justifyContent:'start',
                        minHeight:'30px',
                        borderRadius:'10px',
                        fontWeight:600,
                        '&:hover':{
                            bgcolor:'#e7e7e7'
                        }
                    },
                    '.Mui-selected':{
                        bgcolor:'#e7e7e7'
                    }
                }}
            >
                <Tab label={titleOne} icon = {<FontAwesomeIcon icon={icon1}/>} iconPosition="start" {...a11yProps(0)} />
                <Tab label={titleTwo} icon = {<FontAwesomeIcon icon={icon2}/>} iconPosition="start" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                {Content}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {ContentTwo}
            </TabPanel>
        </Box>
    );
}