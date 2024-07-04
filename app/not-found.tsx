"use client";
import ErrorIcon from "@mui/icons-material/Error";
import { Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

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
          404 | Oops! Page not found.
        </Typography>
        <Link className="mt-4" href="/">
          <Button variant="contained" color="primary">
            Go back home
          </Button>
        </Link>
      </Stack>
    </Container>
  );
}

export default notFound;
