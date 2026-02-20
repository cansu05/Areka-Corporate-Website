import { Typography } from "@mui/material";
import type React from "react";

const ListText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      component="li"
      variant="body1"
      sx={{
        mb: 2,
        fontSize: 18,
        textAlign: "justify",
        lineHeight: 1.6,
      }}
    >
      {children}
    </Typography>
  );
};
export default ListText;
