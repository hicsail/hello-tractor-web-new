import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import { sizes } from "../../styles/styles";
import Sidebar from "../common/Sidebar";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{
          width: sizes.sideBarWidth,
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizes.sideBarWidth})`,
          minHeight: "100vh",
          //   backgroundColor: colorConfigs.mainBg
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
