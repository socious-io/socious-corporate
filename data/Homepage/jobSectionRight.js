import React from "react"

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StarIcon from '@mui/icons-material/Star';
import FaceIcon from '@mui/icons-material/Face';

const jobItem = [
  {
    id: 4,
    icon: <PersonAddIcon />,
    title: "Hire the right talent for your company",
    subtitle: `Meet like-minded people (one-off, part-time, full-time) to work with and solve social problems faster together.
    Our proprietary algorithms recommend the most suitable candidates who share your mission, reduce the risk of mismatches, and improve retention rate, employee happiness, and performance.
    Automate the hiring process using AI screening and chatbots to significantly reduce the cost and time spent on recruitment.
    `
  },
  {
    id: 5,
    icon: <StarIcon />,
    title: "Sell your socially conscious products on Socious Market",
    subtitle: `Reach and sell your products to socially conscious consumers through our marketplace for socially conscious products.
    Directly target socially conscious customers who have explicitly consented to monetize their data and receive your ads on our socially conscious ad platform.
    Get certified as a Socious organization and access talents and customers who are otherwise inaccessible.
    `
  },
  {
    id: 6,
    icon: <FaceIcon />,
    title: "Find impact investors, cities, and impact-driven organizations to collaborate with",
    subtitle: `Meet impact investors who share your passion and raise the capital necessary for social impact.
    Collaborate with cities, schools, and impact-driven organizations.
    Hire talents, sell socially conscious products, fundraise, find partners, and advertise to socially conscious consumers on one platform.
    `
  }
]

export default jobItem
