import styles from "@/app/proprties/[id]/styling.module.css";
import { Container } from "@mui/material";
const loading = function () {
  return (
    <Container>
      <div className="flex my-auto mt-52 justify-center items-center">
        {" "}
        <div className={styles.ldsGrid}>
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

export default loading;
