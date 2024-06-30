"use client";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Box, Grid, Stack, Typography } from "@mui/material";
import MailInsertionControl from "./MailInsertionControl";

const MailLink = function () {
  return (
    <Grid container sx={{ gap: "20px" }} justifyContent="center" color="white">
      <Grid item xs={12} md={7}>
        <Box>
          <Typography
            component="h2"
            sx={{
              textAlign: { xs: "center", md: "start" },
              typography: { xs: "h4", md: "h3" },
            }}
          >
            Stay Updated with MetroMansion
          </Typography>
          <Typography
            mt={2}
            component="p"
            sx={{
              textAlign: { xs: "center", md: "start" },
              typography: { xs: "body1", md: "h5" },
            }}
          >
            Subscribe for the Latest Property Updates
          </Typography>
          <Typography
            mt={6}
            component="p"
            sx={{ typography: { xs: "body1", md: "h5" } }}
          >
            Enter your email below to subscribe:
          </Typography>
          <MailInsertionControl />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <Typography
            sx={{ typography: { xs: "body1", md: "h5" } }}
            component="h5"
          >
            Don&#39;t miss out on new listings, exclusive offers, and real
            estate news. Enter your email to stay informed:
          </Typography>
          <Stack mt={4} justifyContent="center" spacing={1} direction="column">
            <Typography
              component="p"
              sx={{ typography: { xs: "caption", md: "body1" } }}
            >
              - Be the first to know about new properties{" "}
              <LooksOneIcon sx={{ marginLeft: "4px" }}></LooksOneIcon>
            </Typography>
            <Typography
              component="p"
              sx={{ typography: { xs: "caption", md: "body1" } }}
            >
              - Receive market trends and insights
              <TrendingUpIcon sx={{ marginLeft: "4px" }}></TrendingUpIcon>
            </Typography>
            <Typography
              component="p"
              sx={{ typography: { xs: "caption", md: "body1" } }}
            >
              - Get exclusive offers and updates
              <WhatshotIcon sx={{ marginLeft: "4px" }}></WhatshotIcon>
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MailLink;
