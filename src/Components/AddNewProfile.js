import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 20,
  p: 4,
};

const initialData = {
  Name: "",
  Date: "",
  Month: "",
  Year: "",
  Hour: "",
  TimeFormat: "AM",
  Minute: "",
  Place: "",
  Gender: "",
  Relation: "",
};

const SuccessModal = ({ open, handleClose, setAddnewProfile }) => {
  const handleSubmit = () => {
    handleClose();
    setAddnewProfile(false);
  };
  return (
    <Modal open={open} onClose={handleSubmit}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          User Added
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          User has been Added.
        </Typography>
        <br />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={handleSubmit}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
const AddNewProfile = ({ setAddnewProfile }) => {
  const [gender, setGender] = useState("");
  const [relation, setRelation] = useState("");
  const [addUser, setAddUser] = useState(initialData);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isFirstTime, setIsFirstTime] = useState(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setAddUser({ ...addUser, Gender: e.target.value });
  };
  const handleRelationChange = (e) => {
    setRelation(e.target.value);
    setAddUser({ ...addUser, Relation: e.target.value });
  };

  const handleOnChange = (e, para) => {
    console.log(para);
    setAddUser({ ...addUser, [para]: e.target.value });
  };
  const handleTimeFormatChange = (event, newToggle) => {
    setAddUser({ ...addUser, TimeFormat: newToggle });
  };
  console.log("addUser", addUser);

  const validation = () => {
    if (
      addUser.Name !== "" &&
      addUser.Date !== "" &&
      addUser.Month !== "" &&
      addUser.Year !== "" &&
      addUser.Hour !== "" &&
      addUser.Minute !== "" &&
      addUser.Place !== "" &&
      addUser.Gender !== "" &&
      addUser.Relation !== ""
    ) {
      handleOpen();
      console.log("denied", open);
    } else {
      console.log("granted", open);
    }
  };
  return (
    <>
      <Box sx={{ paddingTop: "2em" }}>
        <Button
          sx={{ color: "black" }}
          onClick={() => {
            setAddnewProfile(false);
          }}>
          <ArrowBackIosIcon sx={{ color: "orange" }} /> Add new Profile
        </Button>
      </Box>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Name</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={addUser?.Name}
            helperText={addUser?.Name === "" ? "Enter valid Name" : ""}
            error={!isFirstTime && addUser?.Name === ""}
            fullWidth
            label="Name"
            id="Name"
            variant="outlined"
            onChange={(e) => {
              handleOnChange(e, "Name");
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Date of Birth</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            type={"number"}
            value={addUser?.Date}
            helperText={addUser?.Date === "" ? "Enter valid Date" : ""}
            error={!isFirstTime && addUser?.Date === ""}
            fullWidth
            label="Date"
            variant="outlined"
            onChange={(e) => {
              handleOnChange(e, "Date");
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            type={"number"}
            value={addUser?.Month}
            helperText={addUser?.Month === "" ? "Enter valid Month" : ""}
            error={!isFirstTime && addUser?.Month === ""}
            label="Month"
            variant="outlined"
            onChange={(e) => {
              handleOnChange(e, "Month");
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            type={"number"}
            value={addUser?.Year}
            helperText={addUser?.Year === "" ? "Enter valid Year" : ""}
            error={!isFirstTime && addUser?.Year === ""}
            label="Year"
            variant="outlined"
            onChange={(e) => {
              handleOnChange(e, "Year");
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Time of Birth</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            type={"number"}
            value={addUser?.Hour}
            helperText={addUser?.Hour === "" ? "Enter valid Hour" : ""}
            error={!isFirstTime && addUser?.Hour === ""}
            fullWidth
            label="Hour"
            variant="outlined"
            onChange={(e) => {
              handleOnChange(e, "Hour");
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            type={"number"}
            value={addUser?.Minute}
            helperText={addUser?.Minute === "" ? "Enter valid Minute" : ""}
            error={!isFirstTime && addUser?.Minute === ""}
            label="Minute"
            variant="outlined"
            onChange={(e) => {
              handleOnChange(e, "Minute");
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <ToggleButtonGroup
            value={addUser.TimeFormat}
            color="primary"
            fullWidth
            size="large"
            exclusive
            onChange={handleTimeFormatChange}>
            <ToggleButton value="AM">AM</ToggleButton>
            <ToggleButton value="PM">PM</ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid item xs={12}>
          <Typography>Place of Birth</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={addUser?.Place}
            helperText={addUser?.Place === "" ? "Enter valid Place" : ""}
            error={!isFirstTime && addUser?.Place === ""}
            label="Place"
            variant="outlined"
            onChange={(e) => {
              handleOnChange(e, "Place");
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Gender</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>Relation</Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth error={!isFirstTime && addUser?.Gender === ""}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              value={gender}
              fullWidth
              label="Gender"
              onChange={handleGenderChange}>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl
            fullWidth
            error={!isFirstTime && addUser?.Relation === ""}>
            <InputLabel id="demo-simple-select-label">Relation</InputLabel>
            <Select
              value={relation}
              fullWidth
              label="Relation"
              onChange={handleRelationChange}>
              <MenuItem value={"Mother"}>Mother</MenuItem>
              <MenuItem value={"Father"}>Father</MenuItem>
              <MenuItem value={"Brother"}>Brother</MenuItem>
              <MenuItem value={"Syster"}>Syster</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="small"
          variant="contained"
          // disabled={isSubmitDisabled}
          sx={{
            backgroundColor: "orange",
            color: "white",
            textTransform: "none",
          }}
          onClick={() => {
            validation();
            setIsFirstTime(false);
          }}>
          Save Changes
        </Button>
      </Box>
      <SuccessModal
        open={open}
        handleClose={handleClose}
        setAddnewProfile={setAddnewProfile}
      />
    </>
  );
};

export default AddNewProfile;
