import { Box } from "@mui/material";
import Logo from "./Logo";
import FooterItems from "./FooterItems";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        padding: 5,
        width: 1,
        gap: { xs: 4, md: 20 },
      }}
    >
      <Logo />
      <FooterItems />
    </Box>
  );
};
export default Footer;
