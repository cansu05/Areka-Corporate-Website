import { Container } from "@mui/material";
import type React from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginY: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 8, md: 20 },
        paddingX: 5,
      }}
    >
      {children}
    </Container>
  );
};
export default PageContainer;
