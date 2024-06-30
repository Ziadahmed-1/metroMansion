"use client";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
Typography;

function Description({ description }) {
  const smallDesription = description.split(".").slice(0, 4).join(".");
  const [view, setView] = useState(smallDesription);
  const [expandOpened, setExpandOpened] = useState(false);
  function handleExpand(action) {
    if (action === "open") {
      setView(description);
      setExpandOpened(true);
    } else {
      setView(smallDesription);
      setExpandOpened(false);
    }
  }
  return (
    <Stack direction="row">
      {" "}
      <Typography component="h2" variant="body1">
        {view}
        {expandOpened ? (
          <Typography
            onClick={() => handleExpand("close")}
            className="text-blue-900 hover:cursor-pointer hover:underline ml-2 font-semibold"
            component="span"
            variant="body1"
          >
            ..Less
          </Typography>
        ) : (
          <Typography
            onClick={() => handleExpand("open")}
            className="text-blue-900 hover:cursor-pointer hover:underline ml-2 font-semibold"
            component="span"
            variant="body1"
          >
            ..More
          </Typography>
        )}
      </Typography>
    </Stack>
  );
}

export default Description;
