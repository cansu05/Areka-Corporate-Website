import { Box, Grid, Typography } from "@mui/material";
import { ArekaWorkflowSteps } from "../data/arekaWorkflowSteps";
import type { TFunction } from "i18next";
import BodyText from "../../../components/BodyText";
import ListText from "../../../components/ListText";

const WorkflowSteps = ({ t }: { t: TFunction }) => {
  return (
    <Grid
      container
      sx={{ width: 1 }}
      rowSpacing={{ xs: 5, md: 10 }}
      columnSpacing={{ xs: 5, md: 8, lg: 12 }}
    >
      {ArekaWorkflowSteps.map(
        ({ step, title, bullets: { p1, p2, b1, b2, b3 }, bgColor }) => {
          return (
            <Grid
              size={{ xs: 12, md: 6, lg: 4 }}
              key={step}
              sx={{
                bgcolor: bgColor,
                color: "white",
                paddingY: 3,
                paddingX: 5,
                borderRadius: "60px 0px 60px 0px",
              }}
            >
              <Typography component="h3" variant="h3" textAlign="end" mb={2}>
                {step}
              </Typography>
              <Typography component="h5" variant="h5" mb={1}>
                {t(title)}
              </Typography>
              <BodyText>{t(p1)}</BodyText>
              <Box
                component="ul"
                sx={{
                  pl: 3,
                  listStyleType: "disc",
                  mt: 2,
                }}
              >
                <ListText>{t(b1)}</ListText>
                <ListText>{t(b2)}</ListText>
                {b3 && <ListText>{t(b3)}</ListText>}
              </Box>
              {p2 && <BodyText>{t(p2)}</BodyText>}
            </Grid>
          );
        }
      )}
    </Grid>
  );
};
export default WorkflowSteps;

