import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Dashboard = () => {
  return (
    <div>
      <h3
        style={{
          paddingTop: "5em",
          display: "flex",
          justifyContent: "center",
        }}>
        Basic Information
      </h3>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "#DEB887" }}>
          <Typography>Experience</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#f8f8ff" }}>
          <Typography>
            <ul>
              <li>
                TATA Consultancy Services
                <br />
                Oct-2020 - present
                <br />
                Associate Software developer
                <br />
              </li>
              <br />
              <li>
                Technomize
                <br />
                Oct-2020 - present
                <br />
                Enterprise Software developer
                <br />
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: "#DEB887" }}>
          <Typography>Contact Inforamtion</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#f8f8ff" }}>
          <Typography>
            Name: Ashutosh Shukla
            <br />
            Contact No : +91-8982628962
            <br />
            Email ID : shuklaashu011@gmail.com
            <br />
            LinkedIn : www.linkedin.com/in/ashutoshshukla011
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Dashboard;
