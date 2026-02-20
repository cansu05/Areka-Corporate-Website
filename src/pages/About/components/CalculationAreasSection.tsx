import { Box } from "@mui/material";
import Title from "../../../components/Title";
import type { TFunction } from "i18next";
import CalculationAreaItems from "./CalculationAreaItems";

const CalculationAreasSection = ({ t }: { t: TFunction }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 6, md: 8 },
        width: 1,
      }}
    >
      <Title> {t("aboutPage.calculationAreasSection.title")} </Title>
      <CalculationAreaItems t={t} />
    </Box>
  );
};
export default CalculationAreasSection;
