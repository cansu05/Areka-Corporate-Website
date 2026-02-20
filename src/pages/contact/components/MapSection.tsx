import { Box } from "@mui/material";

const MapSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 300, md: 450 },
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <iframe
        title="Areka Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.762018514133!2d32.7586069!3d39.8840085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347ac1178db1d%3A0xe8b188e5b5346c38!2sBilkent%20Center!5e1!3m2!1str!2str!4v1766751363060!5m2!1str!2str"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
};

export default MapSection;
