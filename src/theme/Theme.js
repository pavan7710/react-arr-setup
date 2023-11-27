import { createTheme } from "@material-ui/core/styles";
import { outlinedInputClasses } from '@mui/material/OutlinedInput';


const arcGreen = "#5AB95D";


export default createTheme({
  palette: {
    primary: {
      main: arcGreen
    },
  },

  typography : {
    fontFamily : [
        'Montserrat'
    ]
  }
});
