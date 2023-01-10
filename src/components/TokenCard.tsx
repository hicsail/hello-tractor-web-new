import { Stack, Typography } from "@mui/material";
import React from "react";
import { primaryColor } from "../styles/styles";

export interface Props {}

const TokenCard: React.FC<Props> = (props) => {
  return (
    <Stack style={{ flex: 1, justifyItems: "center", alignContent: "center" }}>
      <Typography
        style={{
          fontFamily: "RooneySans",
          fontWeight: 420,
          fontSize: "32px",
          lineHeight: "97.44px",
          color: primaryColor,
        }}
      >
        Dashboard
      </Typography>
      <Typography
        style={{
          fontFamily: "AvenirLTStd",
          fontWeight: 750,
          fontSize: "14px",
          lineHeight: "16.8px",
          color: primaryColor,
        }}
      >
        DEMO-03-KW
      </Typography>
    </Stack>
  );
};

export default TokenCard;
