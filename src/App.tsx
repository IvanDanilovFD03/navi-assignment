import { CssBaseline, ThemeProvider } from "@mui/material";

import { Box } from "UI/Box";
import { theme } from "theme";

const App = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box></Box>
      </ThemeProvider>
    </Box>
  );
};

export default App;
