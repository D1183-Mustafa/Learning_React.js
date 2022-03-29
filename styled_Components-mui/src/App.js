import "./App.css";
import MaterialUi from "./components/materialUi/MaterialUi";
// import StyledComponent from './components/styledComponent/StyledComponent';
import { createTheme, ThemeProvider } from "@mui/material";
import { blue, orange, red } from "@mui/material/colors";
import AppBar from "./components/materialUi/appbar/AppBar";

function App() {
  const benimTemam = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
      secondary: {
        main: red[300],
      },
      success: {
        main: blue[300],
      }
    },
  });
  return (
    <ThemeProvider theme={benimTemam}>
      <AppBar theme={benimTemam.palette.secondary}/>
      {/* <StyledComponent/> */}
      <MaterialUi />
    </ThemeProvider>
  );
}

export default App;
