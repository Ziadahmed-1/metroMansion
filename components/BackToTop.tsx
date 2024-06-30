"use client";
import ScrollToTop from "react-scroll-to-top";
import { KeyboardArrowUp } from "@mui/icons-material";

function BackToTop() {
  return (
    <ScrollToTop component={<KeyboardArrowUp />} className="px-2" smooth />
  );
}

export default BackToTop;
