import { Typography } from "@mui/material";
import type React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography textAlign="center" component="h1" variant="h4" fontWeight="500">
      {children}
    </Typography>
  );
};
export default Title;
