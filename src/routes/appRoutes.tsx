import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { ReactNode } from "react";
import MainDashboard from "../pages/MainDashboard";
import LeaderBoardIcon from "../assets/svgs/leaderBoardIcon.svg";
import SupportIcon from "../assets/svgs/supportIcon.svg";
import UserProfileIcon from "../assets/svgs/userProfileIcon.svg";
import ReportsAndHistoryIcon from "../assets/svgs/reportsAndHistoryIcon.svg";
import DashboardIcon from "../assets/svgs/dashboardIcon.svg";

export type RouteType = {
  element: ReactNode;
  state: string;
  index?: boolean;
  path?: string;
  child?: RouteType[];
  sidebarProps: {
    displayText: string;
    icon?: ReactNode;
  };
};

const appRoutes: RouteType[] = [
  {
    index: true,
    path: "/dashboard",
    element: <MainDashboard />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <img src={DashboardIcon} alt="logo SVG" />,
    },
  },
  {
    path: "/market-portfolio",
    element: <MainDashboard />,
    state: "market-portfolio",
    sidebarProps: {
      displayText: "Market Portfolio",
      icon: <FileDownloadOutlinedIcon />,
    },
  },
  {
    path: "/investment-plans",
    element: <MainDashboard />,
    state: "investment-plans",
    sidebarProps: {
      displayText: "Investment plans",
      icon: <FileDownloadOutlinedIcon />,
    },
  },
  {
    path: "/leaderboard",
    element: <MainDashboard />,
    state: "leaderboard",
    sidebarProps: {
      displayText: "Leader board",
      icon: <img src={LeaderBoardIcon} alt="leaderboard SVG" />,
    },
  },
  {
    path: "/reports-and-history",
    element: <MainDashboard />,
    state: "reports-and-history",
    sidebarProps: {
      displayText: "Reports & History",
      icon: <img src={ReportsAndHistoryIcon} alt="leaderboard SVG" />,
    },
  },
  {
    path: "/fleet-and-activity-summary",
    element: <MainDashboard />,
    state: "fleet-and-activity-summary",
    sidebarProps: {
      displayText: "Fleet/Activity Summary",
      icon: <img src={SupportIcon} alt="SupportIcon SVG" />,
    },
  },
  {
    path: "/profile",
    element: <MainDashboard />,
    state: "profile",
    sidebarProps: {
      displayText: "Profile",
      icon: <img src={UserProfileIcon} alt="UserProfileIcon SVG" />,
    },
  },
  {
    path: "/support",
    element: <MainDashboard />,
    state: "support",
    sidebarProps: {
      displayText: "Support",
      icon: <img src={SupportIcon} alt="SupportIcon SVG" />,
    },
  },
];

export default appRoutes;
