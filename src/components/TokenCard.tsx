import { Stack, Typography } from "@mui/material";
import React from "react";
import { colors, fontStyles } from "../styles/styles";
import PositiveTrendLine from "../assets/svgs/positiveTrendLine.svg";
import GroupSolid from "../assets/svgs/groupSolid.svg";
export interface Props {}

const TokenCard: React.FC<Props> = (props) => {
  return (
    <Stack
      style={{
        backgroundColor: colors.grey,
        width: "215px",
        height: "113px",
        borderRadius: "12px",
        padding: "7px 11px",

        justifyContent: "space-between",
      }}
    >
      <Stack
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography style={fontStyles.avenirBold}>DEMO-03-KW</Typography>

        <img src={GroupSolid} alt="GroupSolid SVG" />
      </Stack>
      <Typography style={fontStyles.rooneyBold}>$6,000</Typography>
      <Stack
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack style={{ flexDirection: "row", alignItems: "center" }}>
          <img src={PositiveTrendLine} alt="PositiveTrendLine SVG" />
          <Typography
            style={{ ...fontStyles.avenirRegular, color: colors.green }}
          >
            10%
          </Typography>
          <Typography> &nbsp;</Typography>
          <Typography style={fontStyles.avenirRegular}> / Month</Typography>
        </Stack>
        <Stack
          style={{
            alignItems: "center",
          }}
        >
          <Typography style={fontStyles.avenirRegular}>Dec</Typography>
          <Typography style={{ ...fontStyles.avenirBold, color: colors.green }}>
            $645
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TokenCard;
