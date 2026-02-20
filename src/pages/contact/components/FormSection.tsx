import { Box, Typography } from "@mui/material";
import type { TFunction } from "i18next";
import Form from "./Form";
import BodyText from "../../../components/BodyText";

const FormSection = ({ t }: { t: TFunction }) => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: 1,
        p: 5,
        gap: 5,
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: { md: 550 },
        }}
      >
        <Typography component="h4" variant="h4">
          {t("contactPage.formSection.title")}
        </Typography>

        <BodyText sx={{ mt: 2 }}>
          {t("contactPage.formSection.subtitle")}
        </BodyText>
      </Box>

      <Box
        sx={{
          flex: 1,
          minWidth: 0,
        }}
      >
        <Form t={t} />
      </Box>
    </Box>
  );
};
export default FormSection;
