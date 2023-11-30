import React from "react";
import { NOTFOUND } from "src/assests/index";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./pagenotfound.module.scss";

const PageNotFound = () => {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/dashboard");
  };

  return (
    <React.Fragment>
      <Grid
        className={styles.bgcolor}
        sx={{
          height: "100vh",
        }}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid className={styles.imgbottom} item sx={12}>
          <img
            className={styles.imgfluid}
            src={NOTFOUND}
            alt="page_not_found"
          />
        </Grid>

        <Grid item sx={12}>
          <p>
            <span className={styles.errortext}>ERROR.</span>
            <span className={styles.pagenotfound}>Page not found</span>
          </p>
        </Grid>

        <Grid item sx={12}>
          <Button
            onClick={gotohome}
            variant="contained"
            sx={{
              py: 2,
              px: 5,
              mt: 3,
            }}
          >
            Go to Home
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PageNotFound;
