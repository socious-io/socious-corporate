import React from "react"

import WhatshotIcon from '@mui/icons-material/Whatshot';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';

const jobItem = [
  {
    id: 1,
    icon: <WhatshotIcon />,
    title: "Discover impact projects that help you grow",
    subtitle: `Find opportunities at impact organizations where you can learn new skills.
    `
  },
  {
    id: 2,
    icon: <DeveloperModeIcon />,
    title: "Get rewarded for your impact",
    subtitle: `Contribute and receive THANK tokens as rewards based on your Impact Score.
    `
  },
  {
    id: 3,
    icon: <FilterTiltShiftIcon />,
    title: "Be part of the growing community",
    subtitle: `Meet like-minded people and be part of the impact community.
    `
  }
]

export default jobItem
