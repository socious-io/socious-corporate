import React from "react"

import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

const jobItem = [
  {
    id: 1,
    icon: <PublicOutlinedIcon />,
    title: "社会貢献",
    subtitle: `社会問題、環境問題の解決に貢献する`
  },
  {
    id: 2,
    icon: <FavoriteBorderOutlinedIcon />,
    title: "充実",
    subtitle: `キャリアゴールの達成を支援する`
  },
  {
    id: 3,
    icon: <PaidOutlinedIcon />,
    title: "リワード",
    subtitle: `フェアな報酬と、ソーシャルグッドなトークンを受け取る`
  }
]

export default jobItem
