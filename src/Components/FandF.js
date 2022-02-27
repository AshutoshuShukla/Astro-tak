import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Grid,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import icon from "../Images/icon.png";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FandFTabComp from "./FandFComp/FandFTabComp";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../store/actions/index";
import { useHistory, Link } from "react-router-dom";
import AddNewProfile from "./AddNewProfile";

const FandF = () => {
  const [addnewProfile, setAddnewProfile] = useState(false);
  const [value, setValue] = React.useState(0);
  const [toggle, setToggle] = React.useState("Freinds and Family Profile");
  const dispatch = useDispatch();
  const RelativesList = useSelector((state) => state.FandFReducer.Relatives);
  console.log("RelativesList", RelativesList);
  useEffect(() => {
    action.retriveAllRelativesInfo(dispatch);
  }, []);

  const handleToggleChange = (event, newToggle) => {
    setToggle(newToggle);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const history = useHistory();
  console.log("history", history);
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
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
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: "1" }}>
        <Toolbar variant="dense" sx={{ backgroundColor: "white" }}>
          <Box
            sx={{ flexGrow: 1 }}
            style={{ display: "flex", justifyContent: "left" }}>
            <Link
              to="/question"
              style={{ paddingLeft: "1em", color: "orange" }}>
              <ArrowBackIosIcon sx={{ color: "orange" }} />
            </Link>
          </Box>
          <Box>
            <img
              src={icon}
              style={{ maxHeight: "50px", maxWidth: "50px" }}
              alt="logo"
            />
          </Box>
          <Box
            sx={{ flexGrow: 1 }}
            style={{ display: "flex", justifyContent: "right" }}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "white",
                color: "orange",
                borderColor: "orange",
                textTransform: "none",
              }}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <div
        style={{
          paddingTop: "3em",
          display: "flex",
          justifyContent: "center",
        }}
      />

      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#D97D54",
          },
        }}>
        <Tab label="My Profile" {...a11yProps(0)} />
        <Tab label="Order history" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <>
          <ToggleButtonGroup
            value={toggle}
            //color="primary"
            fullWidth
            size="small"
            exclusive
            onChange={handleToggleChange}>
            <ToggleButton value="Basic Profile">Basic Profile</ToggleButton>
            <ToggleButton value="Freinds and Family Profile">
              Freinds and Family Profile
            </ToggleButton>
          </ToggleButtonGroup>
          {!addnewProfile ? (
            <FandFTabComp
              RelativesList={RelativesList}
              setAddnewProfile={setAddnewProfile}
            />
          ) : (
            <AddNewProfile setAddnewProfile={setAddnewProfile} />
          )}
        </>
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
    </>
  );
};

export default FandF;
