import { Box } from "@mui/material";
import type React from "react";

const LinkContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};
export default LinkContainer;
