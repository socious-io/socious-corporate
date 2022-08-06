import React from "react"
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

const jobItem = [
  {
    id: 1,
    icon: <PublicOutlinedIcon />,
    title: "Impactful",
    subtitle: `Contribute to solving a social or environmental issue.`
  },
  {
    id: 2,
    icon: <FavoriteBorderOutlinedIcon />,
    title: "Fulfilling",
    subtitle: `Help you achieve your career goals.
    `
  },
  {
    id: 3,
    icon: <PaidOutlinedIcon />,
    title: "Rewarding",
    subtitle: `Get compensated fairly and earn crypto tokens.
    `
  }
]

export default jobItem
