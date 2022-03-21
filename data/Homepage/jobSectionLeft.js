import React from "react"

import WhatshotIcon from '@mui/icons-material/Whatshot';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';

const jobItem = [
  {
    id: 1,
    icon: <WhatshotIcon />,
    title: "Discover and contribute to impact projects",
    subtitle: `Meet like-minded people and be part of the social impact community.
    Find one-off, part-time, and full-time opportunities at social impact organizations tackling various social issues and Sustainable Development Goals (SDGs).
    Our AI recommendations will save you time and hassle.
    `
  },
  {
    id: 2,
    icon: <DeveloperModeIcon />,
    title: "Get rewards for your impact",
    subtitle: `When you contribute your time and money to impact projects, our AI tracks your good deeds and reflect them in your impact credit score.
    You receive SociousCoin, a blockchain-based community currency, as rewards for your social and environmental impact.
    `
  },
  {
    id: 3,
    icon: <FilterTiltShiftIcon />,
    title: "Thank acts of kindness with SociousCoin",
    subtitle: `You can thank people who have positively impacted your life (mentors, teachers etc.) by sending them SociousCoin.
    The impact credit scores of both you and the recipient will improve.
    `
  }
]

export default jobItem
