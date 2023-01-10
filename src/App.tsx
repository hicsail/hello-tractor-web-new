import TokenCard from "./components/TokenCard";
import {
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { colors, fontStyles } from "./styles/styles";
const RooneySans = require("./assets/fonts/RooneySans-Regular.woff2");
const AvenirLTStd = require("./assets/fonts/AvenirLTPro55Roman.woff2");

const theme = createTheme({
  typography: {
    fontFamily: "RooneySans, AvenirLTStd, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `  
        @font-face {
          font-family: 'RooneySans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('RooneySans'), local('RooneySans-Regular'), url(${RooneySans}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        } 

        @font-face {
          font-family: 'AvenirLTStd';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('AvenirLTStd'), local('AvenirLTStd-Regular'), url(${AvenirLTStd}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Typography
          style={{
            ...fontStyles.rooneyBold,
            color: colors.primary,
          }}
        >
          Dashboard
        </Typography>
        <TokenCard />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
