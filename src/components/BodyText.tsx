import type { Theme } from "@mui/material/styles";
import { Typography, type SxProps } from "@mui/material";
import type React from "react";

const BodyText = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Typography component="p" variant="subtitle1" sx={{ ...sx }}>
      {children}
    </Typography>
  );
};
export default BodyText;
