"use Client";
import React from "react";
import { motion } from "framer-motion";
import { Alert } from "@mui/material";
function AlertMsg() {
  return (
    <motion.div>
      <Alert className="fixed z-50 left-auto top-6" severity="success">
        Subscription successful! Thank you.
      </Alert>
    </motion.div>
  );
}

export default AlertMsg;
