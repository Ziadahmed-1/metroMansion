import "@/app/globals.css";
import { Container } from "@mui/material";
const LoadingSpinner = function () {
  return (
    <Container>
      <div className="flex my-auto mt-52 justify-center items-center">
        {" "}
        <div className="ldsGrid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Container>
  );
};

export default LoadingSpinner;
