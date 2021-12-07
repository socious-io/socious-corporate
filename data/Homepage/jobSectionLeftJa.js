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
    1-Click Application機能とAIを利用した推薦システムにより、時間と手間を省く
    `
  },
  {
    id: 2,
    icon: <DeveloperModeIcon />,
    title: "新しいスキルを学び、目標を達成できる有給の機会を発見できる",
    subtitle: `様々な社会的課題・SDGsの達成に取り組む社会的企業で、単発、パートタイム、フルタイムの機会を見つけることができる。
    独自のアルゴリズムにより有意義な出会いを提供し、ミスマッチのリスクを低減。
    `
  },
  {
    id: 3,
    icon: <FilterTiltShiftIcon />,
    title: "自分のデータを完全にコントロールし、マネタイズできる",
    subtitle: `ソーシャスではあなたがデータの所有者です。ブロックチェーンを使い、安全にデータをマネタイズすることが可能です。
    ソーシャル・インパクト・プロジェクトへの参加、社会課題解決に繋がる商品の売買、自分のデータのマネタイズがすべて1つのプラットフォームで実現。
    `
  }
]

export default jobItem
