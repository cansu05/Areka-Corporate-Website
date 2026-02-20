import { Box, Button, TextField, Typography } from "@mui/material";
import { contactFormFields } from "../data/formData";
import type { TFunction } from "i18next";

const Form = ({ t }: { t: TFunction }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailto = `mailto:cansuque5@gmail.com?subject=${encodeURIComponent(
      String(subject || "Contact Form")
    )}&body=${encodeURIComponent(
      `Full Name: ${fullName}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        gap: 2,
        width: 1,
      }}
    >
      {contactFormFields.map((field) => (
        <Box key={field.name} sx={{ width: 1, maxWidth: 520 }}>
          <Typography
            component="label"
            sx={{ fontSize: 16, mb: 0.5, display: "block" }}
          >
            {t(field.labelKey)}
          </Typography>

          <TextField
            name={field.name}
            placeholder={
              field.placeholderKey ? t(field.placeholderKey) : undefined
            }
            multiline={field.multiline}
            rows={field.rows}
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": { bgcolor: "rgba(255,255,255,0.92)" },

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.25)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.5)",
              },

              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "rgba(255,255,255,0.5)",
                },
            }}
          />
        </Box>
      ))}

      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 1, bgcolor: "#415C4F", paddingX: 4, paddingY: 1 }}
      >
        {t("contactPage.formSection.submit")}
      </Button>
    </Box>
  );
};
export default Form;
