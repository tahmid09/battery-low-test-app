import React from "react";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ResultPage = ({ formData }) => {
  const PDFData = () => (
    <Document>
      <Page>
        <Text>Project Name: {formData.projectName}</Text>
        <Text>Project Description: {formData.projectDescription}</Text>
        <Text>Client: {formData.client}</Text>
        <Text>Contractor: {formData.contractor}</Text>
        <Text>Max X: {formData.max_X}</Text>
        <Text>Min X: {formData.min_X}</Text>
        <Text>Max Y: {formData.max_Y}</Text>
        <Text>Min Y: {formData.min_Y}</Text>
        <Text>Max Z: {formData.max_Z}</Text>
        <Text>Min Z: {formData.min_Z}</Text>
      </Page>
    </Document>
  );

  return (
    <div>
      <Box m={4} sx={{ flexGrow: 1 }}>
        <PDFDownloadLink document={<PDFData />} fileName="result.pdf">
          Download PDF
        </PDFDownloadLink>

        <Grid
          spacing={4}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item md={6}>
            <h2> Project Details Data</h2>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Field</strong>{" "}
                    </TableCell>
                    <TableCell>
                      <strong>Value</strong>{" "}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Project Name:</TableCell>
                    <TableCell>{formData.projectName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Project Description:</TableCell>
                    <TableCell>{formData.projectDescription}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Client:</TableCell>
                    <TableCell>{formData.client}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Contractor:</TableCell>
                    <TableCell>{formData.contractor}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={6}>
            <h2>Additional Data</h2>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Field</strong>{" "}
                    </TableCell>
                    <TableCell>
                      <strong>Value</strong>{" "}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Max X:</TableCell>
                    <TableCell>{formData.max_X}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Min X:</TableCell>
                    <TableCell>{formData.min_X}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Max Y:</TableCell>
                    <TableCell>{formData.max_Y}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Min Y:</TableCell>
                    <TableCell>{formData.min_Y}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Max Z:</TableCell>
                    <TableCell>{formData.max_Z}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Min Z:</TableCell>
                    <TableCell>{formData.min_Z}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ResultPage;
