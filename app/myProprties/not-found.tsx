"use client";
import ErrorIcon from "@mui/icons-material/Error";
import { Container, Stack, Typography } from "@mui/material";

function notFound() {
  return (
    <Container>
      <Stack
        sx={{ mt: { xs: 20, md: 40 } }}
        className=" flex "
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <ErrorIcon className="size-20 mb-6" />
        <Typography
          textAlign="center"
          className="font-semibold"
          component="h5"
          sx={{ typography: { xd: "h5", md: "h4" } }}
        >
          Sorry you have to Sign in first to be able to use this feature!
        </Typography>
      </Stack>
    </Container>
  );
}

export default notFound;
