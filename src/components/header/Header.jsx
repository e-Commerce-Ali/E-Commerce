import { Box, Container, Stack, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const navs = [
  { name: "Anasayfa", url: "/" },
  { name: "Anasayfa", url: "/" },
  { name: "Anasayfa", url: "/" },
  { name: "Anasayfa", url: "/" },
];
function Header() {
  return (
    <Box width="100%" height="100%">
      <Stack
        height="2rem"
        width="100% "
        bgcolor="bg.pink"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography color="text.white" variant="subtitle2">
          Pasha Deri
        </Typography>
      </Stack>
      <Stack
        justifyContent="space-evenly"
        direction="row"
        bgcolor="bg.white"
        width="100%"
        height="5rem"
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          direction="row"
          gap=".5rem"
        >
          {navs.map((i, j) => {
            return (
              <Typography
                sx={{ cursor: "pointer" }}
                fontSize=".9rem"
                color="text.dark"
                key={j}
              >
                {i.name}
              </Typography>
            );
          })}
        </Stack>
        <Stack>
          <img
            style={{ height: "100%", cursor: "pointer" }}
            src="https://openclipart.org/image/800px/68953"
            alt=""
          />
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <SearchOutlinedIcon color="text.dark"></SearchOutlinedIcon>
          <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
          <ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Header;
