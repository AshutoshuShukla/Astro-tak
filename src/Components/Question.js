import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Fab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import icon from "../Images/icon.png";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../store/actions/index";
import { Link } from "react-router-dom";
let footerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "grey",
};
let selectedFooterStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "orange",
};
let highlightedBox = {
  backgroundColor: "#f5d698",
  color: "#ff751a",
};
let floatingIcon = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "-50px",
};
const Question = () => {
  const [category, setCategory] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  console.log("selectedSuggestion", selectedSuggestion);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleSuggestion = (selectedValue) => {
    setSelectedSuggestion(selectedValue);
  };
  const dispatch = useDispatch();
  const Categories = useSelector((state) => state.QuestionReducer.Categories);
  useEffect(() => {
    action.retriveAllCategoriesInfo(dispatch);
  }, []);

  useEffect(() => {
    setSelectedSuggestion("");
  }, [category]);
  console.log("from redux", Categories);

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: "1" }}>
        <Toolbar variant="dense" sx={{ backgroundColor: "white" }}>
          <Box
            sx={{ flexGrow: 1 }}
            style={{ display: "flex", justifyContent: "left" }}>
            <MenuIcon sx={{ color: "orange" }} />
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
            <Link to="/fandf" style={{ paddingLeft: "1em", color: "orange" }}>
              <AccountCircleIcon sx={{ color: "orange" }} />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <div
        style={{
          paddingTop: "3em",
          display: "flex",
          justifyContent: "center",
        }}></div>
      <Toolbar variant="dense" sx={{ backgroundColor: "#5070bf" }}>
        <Box
          sx={{ flexGrow: 1 }}
          style={{
            display: "flex",
            justifyContent: "left",
            color: "white",
          }}>
          Wallet Balance : <span> &nbsp;&#8377; &nbsp;</span> 0
        </Box>

        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "white",
            color: "#5070bf",
            textTransform: "none",
          }}>
          Add Money
        </Button>
      </Toolbar>
      <Box sx={{ pl: "1em", pr: "1em" }}>
        <Box>
          <h5>Ask a question</h5>
          <Typography paragraph variant="body1">
            Seek accurate answer to your life problems and get guidence towards
            right path
          </Typography>
        </Box>
        <Box>
          <h5>Choose Category</h5>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select value={category} onChange={handleChange}>
                {Categories.length !== 0 &&
                  Categories.map((cat) => {
                    const { name, id } = cat;
                    return (
                      <MenuItem key={id} value={id}>
                        {name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <br />
        <Box>
          <TextField
            placeholder="Type a question here"
            value={selectedSuggestion}
            onChange={(e) => {
              setSelectedSuggestion(e.target.value);
            }}
            fullWidth
            multiline
            rows={5}
          />
        </Box>
        <Box>
          <h5>Ideas what to Ask (Select Any)</h5>
          {Categories.filter((cat) => {
            return cat.id === category;
          }).map((cat) => {
            const { id, suggestions } = cat;
            return suggestions.map((suggestion, index) => {
              return (
                <>
                  <div
                    key={index}
                    value={suggestion}
                    style={{
                      backgroundColor:
                        suggestion === selectedSuggestion
                          ? "lightgrey"
                          : "white",
                    }}
                    onClick={(e) => handleSuggestion(suggestion)}>
                    {suggestion}
                  </div>
                  <hr style={{ margin: "1px" }} />
                  <br />
                </>
              );
            });
          })}
        </Box>
      </Box>
      <Box sx={{ pl: "1em", pr: "1em" }}>
        Seeking accurate asnwers to difficult questions troubling your mind ?
        Ask credible astrologers to know what fututre has in store for you.
      </Box>
      <Box sx={{ padding: "0px 10px" }}>
        <Box style={highlightedBox}>
          <ul>
            <li>
              Personlized responses proivde by our team of valid astrologers
              within 24 hours.
            </li>
            <li>
              Qulaified and experinced astrologers will look into your birth
              chart and provide the right guidance.
            </li>
            <li>
              You can seek answers to any part of your life and for most
              pressing issues.
            </li>
            <li>
              Our team of valid astrologers will not just provide answers but
              also suggest a remedial solution.
            </li>
          </ul>
        </Box>
      </Box>
      <Box style={floatingIcon}>
        <Fab sx={{ backgroundColor: "orange" }} size="medium">
          <MenuIcon sx={{ color: "white" }} />
        </Fab>
      </Box>
      <Toolbar variant="dense" sx={{ backgroundColor: "#5070bf" }}>
        <Box
          sx={{ flexGrow: 1 }}
          style={{
            display: "flex",
            justifyContent: "left",
            color: "white",
          }}>
          <span> &nbsp;&#8377; &nbsp;</span> 150 (1 Question on Love)
        </Box>

        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "white",
            color: "#5070bf",
            textTransform: "none",
          }}>
          Ask Now
        </Button>
      </Toolbar>

      <Toolbar variant="dense" sx={{ backgroundColor: "white" }}>
        <Box
          sx={{ flexGrow: 1 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Box style={footerStyle}>
            <HomeIcon />
            Home
          </Box>

          <div style={footerStyle}>
            <ChatBubbleOutlineIcon />
            Talk
          </div>
          <Box style={selectedFooterStyle}>
            <LiveHelpIcon />
            Question
          </Box>
          <div style={footerStyle}>
            <SummarizeIcon />
            Reports
          </div>
          <div style={footerStyle}>
            <QuestionAnswerIcon />
            Chat
          </div>
        </Box>
      </Toolbar>
    </>
  );
};

export default Question;
