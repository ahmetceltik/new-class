import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Contact = () => {
  return (
    <Box sx={{ m: 2, textAlign: "center" }}>
      <Grid container flexWrap="wrap" justifyContent="space-around">
        <Grid item xs={12}>
          <Typography variant="h4">Get in touch with us!</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          phone details
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          email
        </Grid>
      </Grid>

      <Grid item xs={12} md={8}>
        <Box sx={{ borderRadius: "5px" }}>
          <iframe
            style={{ border: 0, width: "100%", height: "60vh" }}
            title="Shop location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.4854887992956!2d-7.253859384292616!3d52.65120797983931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485d31fd73976893%3A0x195bfcfa0d2d4180!2sClass%20Barber%20Shop!5e0!3m2!1str!2sie!4v1644005956362!5m2!1str!2sie"
            allowfullscreen=""
            loading="lazy"></iframe>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
