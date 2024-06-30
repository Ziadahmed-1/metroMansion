"use client";

import {
  Stack,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

function MailInsertionControl() {
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const inputRef = useRef(null);
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  function handleSubscribe() {
    let inputValue: string | null = inputRef?.current?.value;
    if (inputValue && inputValue.match(isValidEmail)) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
      inputRef.current.value = "";
    } else {
      setError("Please enter a valid email!");
    }
  }

  return (
    <Stack mt={1} spacing={2} direction="row">
      <Box bgcolor="white" px={2} className="w-fit rounded-xl">
        {showAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Alert className="fixed z-50 left-auto top-6" severity="success">
              Subscription successful! Thank you.
            </Alert>
          </motion.div>
        )}

        <TextField
          onChange={() => setError("")}
          inputRef={inputRef}
          style={{
            background: "white",
          }}
          id="standard-basic"
          label="example@ex.com"
          variant="standard"
        />
        {error && (
          <Typography
            className="absolute "
            color="red"
            component="p"
            variant="body2"
          >
            {error}
          </Typography>
        )}
      </Box>
      <Button
        onClick={handleSubscribe}
        size="small"
        sx={{ typography: { xs: "", md: "body1" } }}
        variant="contained"
      >
        Subscribe
      </Button>
    </Stack>
  );
}

export default MailInsertionControl;
