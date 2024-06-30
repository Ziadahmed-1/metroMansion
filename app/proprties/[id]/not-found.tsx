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
          We couldn&rsquo;t find a property with that ID. Please verify the ID
          or contact support for assistance. If the issue persists, we&rsquo;re
          experiencing some technical difficulties. Please try again later.
        </Typography>
      </Stack>
    </Container>
  );
}

export default notFound;
