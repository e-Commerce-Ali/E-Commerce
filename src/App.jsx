import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import Products from "./components/products/Products";
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
      footer: "#F8F4EF"
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <Products />
      <div style={{ height: '500px' }}></div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
