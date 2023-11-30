import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button, Box } from "@mui/material";
import { LOGO, LOCKICON } from "src/assests/index";
import styles from "./updated.module.scss";

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/login");
  };

  return (
    <React.Fragment>
      <Grid
        className={styles.updatedscreen}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid item>
          <img src={LOGO} alt="logo" />
        </Grid>

        <Grid item className={styles.lockimage}>
          <img src={LOCKICON} alt="lock" />
        </Grid>

        <Grid className={styles.successfully} item xs={12} sm={6} md={4}>
          <p>Password has been successfully</p>
          <p>updated!</p>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button className={styles.lockimage}
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            sx={{
              py: 2,
              px: 12,
            }}
          >
            Sign-In
          </Button>
        </Box>
      </Grid>
    </React.Fragment>
  );
}
