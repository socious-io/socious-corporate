import React from "react"
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const reasonItem = [
  {
    id: 1,
    icon: <HowToRegOutlinedIcon  className="icons"/>,
    subtitle: `Machine learning matching to find the right people`,
    linkName:"Learn More",
    link:"https://www.notion.so/socious/Socious-Whitepaper-58fbe2c106f547898df42e409a00c73e#709f02a983e143b1b1b0520eab7a6f47",
  },
  {
    id: 2,
    icon: <GppGoodOutlinedIcon className="icons"/>,
    subtitle: `A blockchain-based platform to safely hire and pay`,
    linkName:"Learn More",
    link:"https://www.notion.so/socious/Socious-Whitepaper-58fbe2c106f547898df42e409a00c73e#15ab48512ddb46fbb7d01cfc8472c693",
  },
  {
    id: 3,
    icon: <LocalOfferOutlinedIcon className="icons"/>,
    subtitle: `Some of the lowest fees in the market`,
    linkName:"Learn More",
    link:"https://www.notion.so/socious/Socious-Whitepaper-58fbe2c106f547898df42e409a00c73e#231ee8eab5384092a91d5fb4e114044e"
  },
  {
    id: 4,
    icon: <MonetizationOnOutlinedIcon className="icons" />,
    subtitle: `Community ownership and rewards with THANK tokens`,
    linkName:"Learn More",
    link:"https://www.notion.so/socious/Socious-Whitepaper-58fbe2c106f547898df42e409a00c73e#b78ae33e7f814ffea0e9030d2775db8f"
  }
]

export default reasonItem
