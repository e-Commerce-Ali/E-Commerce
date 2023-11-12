import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Products from "./components/product/products";
const theme = createTheme({
  palette: {
    text: {
      light: "#616160",
      dark: "#5C5B5B",
      dark2: "#514f4d",
      footer: "#7f7f7f",
    },
    bg: {
      pink: "#E1D4C2",
      green: "#C9C9C9",
      white: "#ffffff",
      darkPink: "#E1D8CB",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Products></Products>
    </ThemeProvider>
  );
}

export default App;
