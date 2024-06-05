import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { Box } from "UI/Box";
import LazyLoadPage from "pages/LazyLoadPage/LazyLoadPage";
import { theme } from "theme";

const MyAccountPage = lazy(() => import("pages/MyAccountPage"));
const CFIPage = lazy(() => import("pages/CFIPage"));
const ScenariosPage = lazy(() => import("pages/ScenariosPage"));
const EmergencyProceduresPage = lazy(
  () => import("pages/EmergencyProceduresPage")
);
const ProceduralTrainerPage = lazy(() => import("pages/ProceduralTrainerPage"));
const ErrorPage = lazy(() => import("pages/ErrorPage"));

const App = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Routes>
            <Route path="/" element={<Navigate to={`/MyAccount`} />} />
            <Route
              path={`*`}
              element={<LazyLoadPage children={<ErrorPage />} />}
            />
            <Route
              path={`/MyAccount`}
              element={<LazyLoadPage children={<MyAccountPage />} />}
            />
            <Route
              path={`/MyAccount:ProceduralTrainerId`}
              element={<LazyLoadPage children={<ProceduralTrainerPage />} />}
            />
            <Route
              path={`/CFI`}
              element={<LazyLoadPage children={<CFIPage />} />}
            />
            <Route
              path={`/Scenarios`}
              element={<LazyLoadPage children={<ScenariosPage />} />}
            />
            <Route
              path={`/EmergencyProcedures`}
              element={<LazyLoadPage children={<EmergencyProceduresPage />} />}
            />
          </Routes>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default App;
