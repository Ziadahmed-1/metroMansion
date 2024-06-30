"use client";
import { Typography, Stack, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
function AnimatedHeroText() {
  const searchRef = useRef();
  const router = useRouter();
  function handleSearch() {
    const query = searchRef.current.value;
    if (query) {
      router.push(`/search/${query}`);
    }
  }
  return (
    <Stack
      direction="column"
      sx={{ alignItems: { xs: "center", md: "start" } }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -200 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          sx={{
            typography: { xs: "h4", md: "h2" },
            textAlign: { xs: "center", md: "start" },
          }}
          component="h1"
        >
          Discover Your
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -200 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Typography
          mb={2}
          sx={{
            typography: { xs: "h4", sm: "h3", md: "h2", xl: "h1" },
            textAlign: { xs: "center", md: "start" },
          }}
          component="h1"
          //style={{ letterSpacing: 2 }}
        >
          Perfect Property
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -200 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <Typography
          mb={4}
          pr={2}
          component="p"
          sx={{
            textAlign: { xs: "center", md: "start" },
            textWrap: "pretty",
          }}
          variant="subtitle1"
        >
          Explore our wide selection of houses ,apartments ,and condons for sale
          or rent. We are here to assist you every step of the way.
        </Typography>
      </motion.div>
      <Stack
        sx={{ background: "#2E2E2E" }}
        alignItems="center"
        justifyContent="center"
        direction="row"
        spacing={2}
        className="w-fit px-4 py-1 rounded-lg"
      >
        <SearchIcon fontSize="medium" />
        <TextField
          inputRef={searchRef}
          id="outlined-basic"
          label="City name"
          variant="standard"
          size="small"
          sx={{
            input: { color: "white" },
          }}
        />
        <Button onClick={handleSearch} variant="contained">
          Search
        </Button>
      </Stack>
    </Stack>
  );
}

export default AnimatedHeroText;
