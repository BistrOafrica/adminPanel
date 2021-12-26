import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import 'boxicons';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

    "&:not(:last-child)": {
        borderBottom: 0
    },
    "&:before": {
        display: "none"
    },
    '&.MuiAccordion-root':{
        border:'0',
        /*margin: '20px 0',*/
        borderRadius:'10px'
    },
    '& .MuiButtonBase-root.MuiAccordionSummary-root.css-1agapo0-MuiButtonBase-root-MuiAccordionSummary-root':{
        border:'0',
        backgroundColor:'#ffffff',
        borderRadius:'10px',
        color:'#404040',
        '&:hover':{
            backgroundColor:'#0054d113'
        },
        '& .css-aw5jt0-MuiButtonBase-root-MuiAccordionSummary-root':{
            padding: '0!important',
        }
    }

}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: "rgba(0, 0, 0, .03)",
    flexDirection: "row",
    border: "0",
    "& .MuiAccordionSummary-expandIconWrapper":{
        margin:'auto 10px auto',

        '&.Mui-expanded': {
            transform: "rotate(90deg)"
        },
    },
    "& .MuiAccordionSummary-content": {
        color:'#404040',
        padding:'0',
        margin:'0',
        backgroundColor:'transparent'
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)"
}));

export default function CustomizedAccordions({menu1, menu2, menu3}) {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>

            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <ul>
                    <li  className="nav-Link" >
                            <AccordionSummary className='a' aria-controls="panel1d-content" id="panel1d-header" style={{backgroundColor:'transparent'}}>
                                <div className="icon"><box-icon color='gainsboro' name='spreadsheet' type='regular' ></box-icon></div>
                                <div className="title">Admin</div>
                            </AccordionSummary>
                        </li>
                </ul>

                <AccordionDetails>
                    <ul>{menu1}</ul>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <ul>
                    <li  className="nav-Link" >
                        <AccordionSummary className='a' aria-controls="panel2d-content" id="panel2d-header" style={{backgroundColor:'transparent'}}>
                            <div className="icon"><box-icon color='gainsboro' name='receipt' type='regular' ></box-icon></div>
                            <div className="title">Accounting</div>
                        </AccordionSummary>
                    </li>
                </ul>

                <AccordionDetails>
                    <ul>{menu2}</ul>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <ul>
                    <li  className="nav-Link" >
                        <AccordionSummary className='a' aria-controls="panel3d-content" id="panel3d-header" style={{backgroundColor:'transparent'}}>
                            <div className="icon"><box-icon color='gainsboro' name='file' type='regular' ></box-icon></div>
                            <div className="title">Management</div>
                        </AccordionSummary>
                    </li>
                </ul>

                <AccordionDetails>
                    <ul>{menu3}</ul>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
