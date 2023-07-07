import React from "react";

import { Box, Grid, TextField, Button } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

import CSVReader from "react-csv-reader";

const StepTwo = ({ formData, handleChange, fileChange }) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <h2> Project Details </h2>
        <Grid container spacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              disabled
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
              disabled
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
              disabled
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
              disabled
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
      <Box m={4} sx={{ flexGrow: 1 }}>
        <h2>Step 2: Additional Details</h2>
        <Grid
          spacing={4}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <div>
            <CSVReader
              onFileLoaded={fileChange}
              config={{ header: true }}
              inputId="ObiWan"
            >
              <button>Upload CSV file</button>
            </CSVReader>
          </div>

          <label htmlFor="ObiWan">
            <Button
              variant="contained"
              component="span"
              endIcon={<NavigationIcon />}
            >
              Upload CSV File
            </Button>
          </label>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              type="number"
              size="small"
              id="max_X"
              label="Max X:"
              name="max_X"
              value={formData.max_X}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              type="number"
              size="small"
              id="min_X"
              label="Min X:"
              name="min_X"
              value={formData.min_X}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              type="number"
              size="small"
              id="max_Y"
              label="Max Y:"
              name="max_Y"
              value={formData.max_Y}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              type="number"
              size="small"
              id="min_Y"
              label="Min Y:"
              name="min_Y"
              value={formData.min_Y}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              type="number"
              size="small"
              id="max_Z"
              label="Max Z:"
              name="max_Z"
              value={formData.max_Z}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              type="number"
              size="small"
              id="min_Z"
              label="Min Z:"
              name="min_Z"
              value={formData.min_Z}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default StepTwo;
