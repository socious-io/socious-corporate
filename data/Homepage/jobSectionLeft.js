import React from "react"

import WhatshotIcon from '@mui/icons-material/Whatshot';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';

const jobItem = [
  {
    id: 1,
    icon: <WhatshotIcon />,
    title: "Meet like-minded people",
    subtitle: `
      Socious AI will match you with the people you want to meet and offer community support and meaningful connections that accelerate social change
    `
  },
  {
    id: 2,
    icon: <DeveloperModeIcon />,
    title: "Easily find the most suited social impact projects",
    subtitle: `
      From fast-growing social startups to international organizations, Socious AI will connect you with the right organization. You can contribute to the achievement of the SDGs in a variety of ways, including freelance, part-time, and advisory.
    `
  },
  {
    id: 3,
    icon: <FilterTiltShiftIcon />,
    title: "Visualizes your social impact",
    subtitle: `
      Socious' unique algorithm quantifies and visualizes your contribution to solving social issues
    `
  }
]

export default jobItem
