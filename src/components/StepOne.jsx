import React from "react";
import { Box, Grid, TextField } from "@mui/material";

const StepOne = ({ formData, handleChange }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h2>Step 1: Project Details</h2>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            size="small"
            id="outlined-required"
            label="Project Name:"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            size="small"
            id="projectDescription"
            label="Project Description:"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            size="small"
            id="client"
            label="Client:"
            name="client"
            value={formData.client}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            size="small"
            id="contractor"
            label="Contractor:"
            name="contractor"
            value={formData.contractor}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StepOne;
