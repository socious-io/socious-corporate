import React from "react"

import WhatshotIcon from '@mui/icons-material/Whatshot';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';

const jobItem = [
  {
    id: 1,
    icon: <WhatshotIcon />,
    title: "気軽に社会課題解決に貢献",
    subtitle: `同じ志を持つ仲間と出会い、ソーシャルインパクトコミュニティの一員となる。
    様々な社会的課題・SDGsの達成に取り組むインパクト団体で、単発、パートタイム、フルタイムの機会と出会える。
    AIを利用した推薦システムにより、時間と手間を省く。
    `
  },
  {
    id: 2,
    icon: <DeveloperModeIcon />,
    title: "インパクトに応じた報酬を受け取る",
    subtitle: `インパクト団体に時間や資金を提供すると、AIがあなたの社会課題解決への貢献度をインパクトクレジットスコアとして数値化。
    あなたのインパクトに応じて、ブロックチェーン上のコミュニティ通貨である SociousCoin を報酬として受け取る。
    `
  },
  {
    id: 3,
    icon: <FilterTiltShiftIcon />,
    title: "SociousCoinを送って感謝の気持ちを可視化",
    subtitle: `あなたの人生にポジティブな影響を与えた人（メンター、先生など）にSociousCoinを送ることで、感謝の気持ちを伝えることができます。
    あなたと受け取った人の両方のインパクトクレジットスコアが改善されます。
    `
  }
]

export default jobItem
