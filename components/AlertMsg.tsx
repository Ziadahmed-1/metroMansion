"use Client";
import React from "react";
import { motion } from "framer-motion";
import { Alert } from "@mui/material";
function AlertMsg({ text, type }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Alert severity={type} className="text-xs md:text-lg">
        {text}
      </Alert>
    </motion.div>
  );
}

export default AlertMsg;
