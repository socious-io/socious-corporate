import React from "react"

import WhatshotIcon from '@mui/icons-material/Whatshot';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';

const jobItem = [
  {
    id: 1,
    icon: <WhatshotIcon />,
    title: "同じ志を持つ仲間と出会える ",
    subtitle: `検索機能やAIを利用した推薦システムがあなたが出会うべき人とマッチング。
    コミュニティサポートと、出会いの化学反応が社会課題解決を加速化 
    `
  },
  {
    id: 2,
    icon: <DeveloperModeIcon />,
    title: "誰でも気軽に自分にぴったりの団体・方法で社会課題解決に貢献できる",
    subtitle: `急成長中のソーシャル・スタートアップから国際機関まで、
    社会課題解決に取り組むソーシャルセクターの団体からスカウトメールが届く。
    フルコミットが難しい方も、副業や顧問など様々な方法でSDGs達成に寄与できる機会をAIが推薦
    `
  },
  {
    id: 3,
    icon: <FilterTiltShiftIcon />,
    title: "あなたのソーシャルインパクトをAIが可視化",
    subtitle: `あなたが社会課題解決に寄与していると実感できるように、独自のアルゴリズムがあなたの貢献度を可視化します
    `
  }
]

export default jobItem
