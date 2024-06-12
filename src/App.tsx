import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "theme";

import { Box } from "UI/Box";
import { NavigationMenu, useNavigationMenuStore } from "modules/NavigationMenu";
import LazyLoadPage from "pages/LazyLoadPage/LazyLoadPage";

import { useBreakpoints } from "hooks/useBreakpoints";

const MyAccountPage = lazy(() => import("pages/MyAccountPage"));
const CFIPage = lazy(() => import("pages/CFIPage"));
const ScenariosPage = lazy(() => import("pages/ScenariosPage"));
const EmergencyProceduresPage = lazy(
  () => import("pages/EmergencyProceduresPage")
);
const ProceduralTrainerPage = lazy(() => import("pages/ProceduralTrainerPage"));
const ErrorPage = lazy(() => import("pages/ErrorPage"));

const App = () => {
  const { openMenu } = useNavigationMenuStore((state) => state);
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            maxWidth: "100vw",
            overflow: "hidden",
          }}
        >
          <NavigationMenu />
          <Box
            sx={{
              width: "100%",
              maxHeight: openMenu ? "100vh" : "auto",
              overflow: openMenu ? "hidden" : "auto",
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to={`/My-Account`} />} />
              <Route
                path={`*`}
                element={<LazyLoadPage children={<ErrorPage />} />}
              />
              <Route
                path={`/My-Account`}
                element={<LazyLoadPage children={<MyAccountPage />} />}
              />
              <Route
                path={`/My-Account/:ProceduralTrainerId`}
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
                path={`/Emergency-Procedures`}
                element={
                  <LazyLoadPage children={<EmergencyProceduresPage />} />
                }
              />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default App;
