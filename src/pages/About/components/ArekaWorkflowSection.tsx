import { Box } from "@mui/material";
import type { TFunction } from "i18next";
import WorkflowSteps from "./WorkflowSteps";
import Title from "../../../components/Title";

const ArekaWorkflowSection = ({ t }: { t: TFunction }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        width: 1,
      }}
    >
      <Title>{t("aboutPage.ArekaWorkflowSection.title")}</Title>
      <WorkflowSteps t={t} />
    </Box>
  );
};
export default ArekaWorkflowSection;
