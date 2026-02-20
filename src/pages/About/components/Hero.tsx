import { Box } from "@mui/material";
import ArekaVideo from "../../../assets/Areka-video.mp4";

const Hero = () => {
  return (
    <Box
      component="video"
      src={ArekaVideo}
      autoPlay
      loop
      muted
      playsInline
      sx={{
        display: { xs: "none", md: "block" },
        width: "100%",
        height: "810px",
        objectFit: "cover",
      }}
    />
  );
};
export default Hero;
