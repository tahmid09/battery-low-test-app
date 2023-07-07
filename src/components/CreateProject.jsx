import React, { useState } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import ResultPage from "./ResultPage";
import { Container } from "@mui/material";
import { Stack, Button } from "@mui/material";

const CreateProject = ({ onNext }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResult, setshowResult] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    client: "",
    contractor: "",
    csvFile: null,
    max_X: "",
    min_X: "",
    max_Y: "",
    min_Y: "",
    max_Z: "",
    min_Z: "",
  });

  const fileChange = (data, fileInfo) => {
    let maxX = 0;
    let minX = 0;
    let maxY = 0;
    let minY = 0;
    let maxZ = 0;
    let minZ = 0;

    let Xarr = [];
    let Yarr = [];
    let Zarr = [];

    data.forEach((row, i) => {
      const [KP, X, Y, Z] = row;

      if (i !== 0) {
        if (X) {
          Xarr = [...Xarr, parseFloat(X)];
        }
        if (Y) {
          Yarr = [...Yarr, parseFloat(Y)];
        }
        if (Z) {
          Zarr = [...Zarr, parseFloat(Z)];
        }
      }
    });
    maxX = Math.max(...Xarr);
    minX = Math.min(...Xarr);

    maxY = Math.max(...Yarr);
    minY = Math.min(...Yarr);

    maxZ = Math.max(...Zarr);
    minZ = Math.min(...Zarr);

    setFormData((prevData) => ({
      ...prevData,
      max_X: maxX,
      min_X: minX,
      max_Y: maxY,
      min_Y: minY,
      max_Z: maxZ,
      min_Z: minZ,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const nextStep = () => {
    if (
      !formData.projectName ||
      !formData.projectDescription ||
      !formData.client ||
      !formData.contractor
    ) {
      alert("Please fill in all the input.");
      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.csvFile &&
      (!formData.max_X ||
        !formData.min_X ||
        !formData.max_Y ||
        !formData.min_Y ||
        !formData.max_Z ||
        !formData.min_Z)
    ) {
      alert(
        "Please provide either a CSV file or manually enter the min-max values."
      );
      return;
    }
    
    if( Number(formData.max_X) <= Number(formData.min_X)) {
      alert(
        "Max X Must be greater than Min X "
      );
      return;
    }

    if( Number(formData.max_Y) <= Number(formData.min_Y)) {
      alert(
        "Max Y Must be greater than Min Y "
      );
      return;
    }

    if( Number(formData.max_Z) <= Number(formData.min_Z)) {
      alert(
        "Max Z Must be greater than Min Z "
      );
      return;
    }

    setshowResult(true);
    console.log(formData);
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {currentStep === 1 && (
            <StepOne formData={formData} handleChange={handleChange} />
          )}
          {currentStep === 2 && (
            <StepTwo
              formData={formData}
              handleChange={handleChange}
              fileChange={fileChange}
            />
          )}
          <div>
            {currentStep > 1 && (
              <Button
                variant="contained"
                onClick={prevStep}
                style={{ margin: "7px" }}
              >
                Previous
              </Button>
            )}
            {currentStep < 2 && (
              <Button
                variant="contained"
                onClick={nextStep}
                style={{ margin: "7px" }}
              >
                Next
              </Button>
            )}
            {currentStep === 2 && (
              <Button
                type="submit"
                variant="contained"
                color="warning"
                style={{ margin: "7px" }}
              >
                Submit
              </Button>
            )}
          </div>
        </Stack>
      </form>

      <div>{showResult ? <ResultPage formData={formData} /> : ""}</div>
    </Container>
  );
};

export default CreateProject;
