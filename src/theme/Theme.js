import { createTheme } from "@material-ui/core/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const arcGreen = "#5AB95D";

export default createTheme({
  palette: {
    primary: {
      main: arcGreen,
    },
  },
  typography: {
    fontFamily: ["Montserrat"],
  },

  components : {
    MuiButton : {
      styleOverrides : {
        root : {
          textTransform: "capitalize",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          color: "white",
          borderRadius: "40px",
  
        }
      }
    }
  }

});
