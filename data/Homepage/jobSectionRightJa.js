import React from "react"

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StarIcon from '@mui/icons-material/Star';
import FaceIcon from '@mui/icons-material/Face';

const jobItem = [
  {
    id: 4,
    icon: <PersonAddIcon />,
    title: "あなたの会社にぴったりの人材と出会う ",
    subtitle: `AIが膨大なデータを基に、ミッションフィット、カルチャーフィット、
      スキルフィットを分析し、あなたの会社にぴったりの候補者を推薦。
      ミスマッチを防ぎ、定着率、従業員幸福度、パフォーマンス向上。
    `
  },
  {
    id: 5,
    icon: <StarIcon />,
    title: "採用にかける工数・費用を大幅に削減",
    subtitle: `AIチャットボット等により採用プロセスを自動化し、
      採用にかける工数・費用を大幅に削減
      ソーシャルベンチャーはメンバー採用のためにまずソーシャスを使います
    `
  },
  {
    id: 6,
    icon: <FaceIcon />,
    title: "インパクト投資家と繋がる ",
    subtitle: `あなたの情熱に賛同してくれるインパクト投資家とのマッチングをサポート
      自治体、学校、ソーシャルインパクト重視の企業とコラボレーションの機会を提供 
    `
  }
]

export default jobItem
