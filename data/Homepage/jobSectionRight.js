import React from "react"

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StarIcon from '@mui/icons-material/Star';
import FaceIcon from '@mui/icons-material/Face';

const jobItem = [
  {
    id: 4,
    icon: <PersonAddIcon />,
    title: "Hire the right talent for your company",
    subtitle: `
      Socious AI recommends the perfect candidate for your company based on mission-fit, culture-fit, and skill-fit. It helps prevent mismatches and improve retention rate, employee happiness, and performance. Social ventures come here first for build their team.
    `
  },
  {
    id: 5,
    icon: <StarIcon />,
    title: "Significantly reduce the cost and time spent on recruitment",
    subtitle: `
      Automate the hiring process using AI screening and chatbots to significantly reduce the cost and time spent on recruitment.
    `
  },
  {
    id: 6,
    icon: <FaceIcon />,
    title: "Connect with impact investors",
    subtitle: `
      Socious will match you with impact investors who share your passion. Collaborate with cities, schools, and impact-driven corporates.
    `
  }
]

export default jobItem
