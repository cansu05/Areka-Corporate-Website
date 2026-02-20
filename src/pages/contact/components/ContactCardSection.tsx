import type { TFunction } from "i18next";
import { Box, Paper } from "@mui/material";
import { contactCards } from "../data/ContactCard";
import Icon from "../../../utils/icon";
import BodyText from "../../../components/BodyText";

const ContactCardSection = ({ t }: { t: TFunction }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { md: 20 },
        alignItems: "center",
        justifyContent: "center",
        mt: { xs: 0, md: 10 },
      }}
    >
      {contactCards.map(({ titleKey, icon, descriptionKey, valueKey }) => {
        return (
          <Paper
            key={titleKey}
            sx={{
              bgcolor: "white",
              padding: 3,
              textAlign: "center",
              maxWidth: 500,
            }}
          >
            <Icon name={icon} size={50} sx={{ color: "icon.main" }} />
            <BodyText
              sx={{ fontWeight: 600, textAlign: "center", fontSize: 20, mb: 1 }}
            >
              {t(titleKey)}
            </BodyText>
            <BodyText sx={{ mb: 1 }}>{t(descriptionKey)}</BodyText>
            <BodyText sx={{ color: "primary.main" }}>{t(valueKey)}</BodyText>
          </Paper>
        );
      })}
    </Box>
  );
};
export default ContactCardSection;
