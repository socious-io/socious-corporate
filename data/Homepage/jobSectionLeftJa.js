import React from "react"

import WhatshotIcon from '@mui/icons-material/Whatshot';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';

const jobItem = [
  {
    id: 1,
    icon: <WhatshotIcon />,
    title: "誰でも気軽に社会課題解決に貢献できる",
    subtitle: `同じ志を持つ仲間と出会い、ソーシャルインパクトコミュニティの一員となる。
    様々な社会的課題・SDGsの達成に取り組むインパクト団体で、単発、パートタイム、フルタイムの機会と出会える。
    AIを利用した推薦システムにより、時間と手間を省く。
    `
  },
  {
    id: 2,
    icon: <DeveloperModeIcon />,
    title: "新しいスキルを学べる有給の仕事で社会貢献",
    subtitle: `有給の仕事で新しいスキルを学びながら社会貢献。
    独自のアルゴリズムにより有意義な出会いを提供。
    貢献の対価として受け取ったソーシャスコインはソーシャス団体（NPOやソーシャルビジネス等）が販売するエシカル商品と交換可能 - 時間の貢献だけでなく、商品の売買でも社会貢献。
    `
  },
  {
    id: 3,
    icon: <FilterTiltShiftIcon />,
    title: "インパクトを可視化・価値化",
    subtitle: `ソーシャス独自のアルゴリズムにより、社会課題解決への貢献度を数値化・可視化。
    貢献することでカーボン・オフセット・トークンなどを受け取る。
    `
  }
]

export default jobItem
