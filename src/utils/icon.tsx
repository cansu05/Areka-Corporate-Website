import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function Icon({
  name,
  size = 26,
  sx,
}: {
  name: string;
  size?: number;
  sx?: object;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <Box
      component="span"
      className="material-symbols-outlined"
      sx={{
        fontSize: size,
        lineHeight: 1,
        verticalAlign: "middle",
        fontWeight: 200,
        visibility: loaded ? "visible" : "hidden",
        ...sx,
      }}
    >
      {name}
    </Box>
  );
}
