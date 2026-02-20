import { Box } from "@mui/material";
import Logo from "./Logo";
import FlagButton from "./FlagButton";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        paddingX: 5,
      }}
    >
      <Logo />

      <NavbarItems />

      <FlagButton textEn="En" textTr="Tr" />
    </Box>
  );
};
export default Navbar;
