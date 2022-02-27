import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Grid,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
const FandFTabComp = ({ RelativesList, setAddnewProfile }) => {
  return (
    <>
      <Toolbar variant="dense" sx={{ backgroundColor: "#5772b5" }}>
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
      {typeof RelativesList === "object"
        ? RelativesList?.message
        : Array.isArray(RelativesList) &&
          RelativesList?.length !== 0 && (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">DOB</TableCell>
                    <TableCell align="right">TOB</TableCell>
                    <TableCell align="right">Relation</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {RelativesList.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
      <br />
      <br />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="small"
          variant="contained"
          sx={{
            backgroundColor: "orange",
            color: "white",
            textTransform: "none",
          }}
          onClick={() => {
            setAddnewProfile(true);
          }}>
          Add New Profile
        </Button>
      </Box>
    </>
  );
};

export default FandFTabComp;
