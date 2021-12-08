import React from "react"

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StarIcon from '@mui/icons-material/Star';
import FaceIcon from '@mui/icons-material/Face';

const jobItem = [
  {
    id: 4,
    icon: <PersonAddIcon />,
    title: "あなたの会社にぴったりの人材と出会う ",
    subtitle: `同じ志を持つ仲間（単発、副業、正社員）と出会い、一緒に社会問題をより早く解決する。
    独自のアルゴリズムにより、あなたの会社のミッションに共感する最適な人材を推薦。ミスマッチを防ぎ、定着率、従業員幸福度、パフォーマンス向上。
    AIチャットボット等により採用プロセスを自動化し、採用にかける工数・費用を大幅に削減
    `
  },
  {
    id: 5,
    icon: <StarIcon />,
    title: "ソーシャスマーケットでエシカル商品を販売",
    subtitle: `エシカル商品の市場で、社会的意識の高い消費者にリーチし、あなたの商品を販売。
    エシカル広告を利用し、個人データをマネタイズし、広告を受け取ることに同意した社会的意識の高い顧客にターゲット広告。
    ソーシャス団体認定を受け、通常出会うことのできない人材や顧客に出会う。
    `
  },
  {
    id: 6,
    icon: <FaceIcon />,
    title: "インパクト投資家、自治体、エシカル企業と繋がる",
    subtitle: `インパクト投資家と繋がり、社会課題解決に必要な資金を調達。
    自治体やエシカル企業とのコラボレーションし、ソーシャルインパクトを拡大。
    ソーシャルセクター人材の採用、エシカル商品の販売、資金調達、パートナー探し、エシカル広告などを全て一つのプラットフォームで。
    `
  }
]

export default jobItem
