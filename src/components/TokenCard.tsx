import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { colors, fontStyles } from "../styles/styles";
import GroupsIcon from "@mui/icons-material/Groups";
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
        padding: "11px",
        justifyContent: "space-between",
      }}
    >
      <Stack
        style={{
          flex: 1,
          justifyItems: "center",
          alignContent: "center",
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
          <Stack style={{ flexDirection: "row" }}>
            <img src={PositiveTrendLine} alt="PositiveTrendLine SVG" />
            <Typography style={fontStyles.avenirRegular}>10% </Typography>
            <Typography style={fontStyles.avenirRegular}> / Month</Typography>
          </Stack>
          <Stack
            style={{
              alignItems: "center",
            }}
          >
            <Typography>Dec</Typography>
            <Typography
              style={{ ...fontStyles.avenirBold, color: colors.green }}
            >
              $645
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TokenCard;
