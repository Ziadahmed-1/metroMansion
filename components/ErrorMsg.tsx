import ErrorIcon from "@mui/icons-material/Error";
import { Container, Stack, Typography } from "@mui/material";

function notFound({ msg, xsmt, mdmt }) {
  return (
    <Container>
      <Stack
        sx={{ mt: { xs: xsmt || 20, md: mdmt || 40 } }}
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
          {msg}
        </Typography>
      </Stack>
    </Container>
  );
}

export default notFound;
