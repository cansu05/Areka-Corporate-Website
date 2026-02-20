import { navItems } from "../config/navigation";
import { Box } from "@mui/material";
import Links from "./Links";

const NavbarItems = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
      <Links data={navItems} />
    </Box>
  );
};

export default NavbarItems;
