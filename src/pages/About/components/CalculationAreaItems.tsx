import { Box, Grid, Typography } from "@mui/material";
import type { TFunction } from "i18next";
import { calculationAreas } from "../data/calculationAreas";
import Icon from "../../../utils/icon";

const CalculationAreaItems = ({ t }: { t: TFunction }) => {
  return (
    <Grid
      container
      sx={{ placeContent: "center", width: 1 }}
      columnSpacing={{ xs: 0, sm: 5, md: 0 }}
      rowSpacing={3}
    >
      {calculationAreas.map(({ text, iconName, bgColor }) => {
        return (
          <Grid
            key={text}
            size={{ xs: 6, sm: 3, md: 3 }}
            sx={{ placeItems: "center" }}
          >
            <Box
              sx={{
                width: 120,
                height: 120,
                bgcolor: bgColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                transform: "rotate(45deg)",
                mb: 3.5,
              }}
            >
              <Box sx={{ transform: "rotate(-45deg)" }}>
                <Icon
                  name={iconName}
                  size={60}
                  sx={{ color: "icon.secondary" }}
                />
              </Box>
            </Box>
            <Typography component="h6" variant="h6">
              {t(text)}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default CalculationAreaItems;
