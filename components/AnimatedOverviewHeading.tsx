"use client";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

function AnimatedOverviewHeading() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <Typography
        component="h2"
        sx={{ typography: { xs: "h4", md: "h3" } }}
        variant="h3"
        lineHeight={1.3}
        textAlign="center"
      >
        Why Choose MetroMansion?
        <Typography
          sx={{ typography: { xs: "h5", md: "h3" } }}
          style={{ marginTop: "10px" }}
        >
          Comprehensive Property Details for Informed Decisions
        </Typography>
      </Typography>
    </motion.div>
  );
}

export default AnimatedOverviewHeading;
