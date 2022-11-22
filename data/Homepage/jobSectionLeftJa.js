import React from "react"

const jobItem = [
  {
    id: 1,
    // icon: <PublicOutlinedIcon fontSize="large" />,
    icon: <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29 0.5C13.2854 0.5 0.5 13.2854 0.5 29C0.5 44.7146 13.2854 57.5 29 57.5C44.7146 57.5 57.5 44.7146 57.5 29C57.5 13.2854 44.7146 0.5 29 0.5ZM16.7444 6.6452C20.3842 4.64366 24.5606 3.49988 29 3.49988C33.5445 3.49988 37.8128 4.69988 41.5112 6.79286L33.5216 9.39914C31.8458 9.94524 30.6997 11.4593 30.6201 13.2054C30.0529 12.9195 29.4294 12.7695 28.7919 12.7695C27.3622 12.7695 26.0638 13.4984 25.3208 14.7195C25.1146 15.0593 25.0489 15.4695 25.145 15.8562L26.5419 21.5562C26.6333 21.9265 26.863 22.2499 27.1841 22.4585L30.1231 24.3617L30.3106 24.9828C30.3997 25.2828 30.2801 25.5054 30.2028 25.6109C30.1231 25.7187 29.9426 25.8969 29.6309 25.8969H27.8872L19.0066 19.4115C17.3308 18.1903 16.3769 16.224 16.4613 14.1474L16.7444 6.6452ZM31.4072 54.3824C38.525 43.517 37.487 42.3566 36.7135 41.4962C35.9986 40.704 35.0353 40.2587 34.1869 39.8649C32.8065 39.2274 32.3658 38.9251 32.2885 38.2735C32.19 37.4415 34.1025 35.6626 35.019 34.8048C36.2588 33.6493 37.0791 32.8853 37.2151 31.9056C37.3299 31.083 36.969 30.2955 36.6198 29.5338C36.4416 29.1447 36.0713 28.3384 36.1135 28.1158C36.1135 28.1158 36.1651 28.0478 36.3643 27.9564C37.876 27.2486 42.1253 27.7548 43.9393 27.9705C44.6588 28.0572 45.0948 28.1088 45.4112 28.1088C45.7651 28.3267 46.8479 29.1213 48.09 31.3338C49.2033 33.3072 51.1439 35.5924 53.1104 37.2751C49.9182 46.5589 41.5136 53.4307 31.4072 54.3823L31.4072 54.3824ZM50.708 29.867C49.2525 27.2748 47.0283 24.8373 45.3057 25.1068C45.0994 25.0904 44.6775 25.0412 44.2978 24.9943C40.9533 24.5959 37.2082 24.2537 35.0962 25.2404C32.0119 26.6818 33.3806 29.6631 33.8939 30.7858C33.983 30.9779 34.1025 31.2404 34.1752 31.4326C33.9103 31.7373 33.3806 32.2318 32.9728 32.6115C31.2173 34.2475 29.0306 36.2842 29.3072 38.6253C29.5931 41.0511 31.5197 41.9393 32.9283 42.5909C33.4017 42.8089 33.8541 43.0198 34.1822 43.2472C33.8564 44.5644 31.8009 48.4199 27.746 54.469C14.267 53.8127 3.49997 42.64 3.49997 28.9996C3.49997 20.6908 7.49609 13.2988 13.667 8.63922L13.4607 14.0299C13.3388 17.1049 14.7498 20.0252 17.2365 21.8347L26.5131 28.6081C26.7709 28.7956 27.0803 28.8963 27.3991 28.8963H29.6304C30.8163 28.8963 31.9015 28.3526 32.6092 27.401C33.3147 26.4518 33.5256 25.2565 33.1835 24.1174L32.8366 22.9643C32.7335 22.6244 32.5132 22.3314 32.2155 22.1393L29.3139 20.2596L28.2475 15.9119C28.585 15.7127 29.0444 15.715 29.3889 15.9494L30.5491 16.7369C31.3905 17.3064 32.4686 17.2361 33.2304 16.5658C33.9944 15.8932 34.2007 14.8315 33.7483 13.9385C33.6593 13.758 33.6147 13.5775 33.6147 13.4018C33.6147 12.9635 33.8726 12.4361 34.4514 12.2486L44.682 8.91112C50.6516 13.5846 54.4998 20.8499 54.4998 28.9991C54.4998 30.7148 54.3264 32.3928 54.003 34.0148C52.6811 32.7116 51.4506 31.1859 50.7076 29.8663L50.708 29.867Z" fill="#2F4786"/>
    </svg>,   
    title: "社会貢献",
    subtitle: `社会問題、環境問題の解決に貢献する`
  },
  {
    id: 2,
    icon: <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.0496 9.02105C15.8433 9.02105 12.6368 10.2773 10.2182 12.8086C5.38067 17.8711 5.38535 25.9852 10.2182 31.0522L28.6868 50.4208C29.0243 50.777 29.4954 50.9786 29.9899 50.9786C30.4821 50.9786 30.9532 50.777 31.293 50.4208C37.455 43.9732 43.6188 37.5184 49.7802 31.0708C54.6177 26.0083 54.6177 17.8894 49.7802 12.8272C44.9427 7.76495 36.9552 7.76465 32.1174 12.8272L29.9987 15.0209L27.88 12.8084C25.4613 10.2771 22.255 9.02087 19.0486 9.02087L19.0496 9.02105ZM19.0496 12.5461C21.2879 12.5461 23.5402 13.4672 25.2932 15.3023L28.7057 18.8836C29.0432 19.2399 29.5143 19.4414 30.0088 19.4414C30.501 19.4414 30.9721 19.2399 31.3119 18.8836L34.7057 15.3211C38.2095 11.6531 43.6703 11.6531 47.1743 15.3211C50.6781 18.9891 50.6781 24.9283 47.1743 28.5961C41.4508 34.5868 35.7227 40.5679 29.9993 46.5589L12.8243 28.5775C9.32039 24.9049 9.32039 18.9703 12.8243 15.3025C14.5774 13.4674 16.811 12.5462 19.0493 12.5462L19.0496 12.5461Z" fill="#2F4786"/>
    </svg>,   
    title: "充実",
    subtitle: `キャリアゴールの達成を支援する`
  },
  {
    id: 3,
    icon: <svg width="56" height="56" viewBox="0 0 56 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9995 0.381159C14.1269 0.381159 9.70193 1.34446 6.34313 3.02488C3.25175 4.42408 0.783774 7.03738 0.399414 10.0185V39.4185C0.399414 42.7115 2.95643 45.2732 6.32441 46.9557C9.69473 48.6385 14.1172 49.6182 18.9994 49.6182C22.9861 49.6182 26.668 48.9549 29.7244 47.7995C32.1033 48.962 34.7799 49.6182 37.5994 49.6182C47.518 49.6182 55.5994 41.5368 55.5994 31.6182C55.5994 21.6996 47.518 13.6182 37.5994 13.6182C37.6275 11.933 37.5807 11.2065 37.5807 10.0182C37.1213 6.56818 34.126 4.2877 31.6557 3.02458C28.297 1.3441 23.8719 0.380859 18.9993 0.380859L18.9995 0.381159ZM18.9995 4.01866C23.4058 4.01866 27.3785 4.94446 30.0995 6.30616C32.4808 7.4968 33.7136 8.90536 33.9808 10.1124C34.2199 12.264 31.8972 14.0171 30.0995 14.9124C27.3784 16.2741 23.4059 17.1999 18.9995 17.1999C14.5931 17.1999 10.6205 16.2741 7.89953 14.9124C6.04091 13.7523 3.98549 12.6812 3.99953 10.2812C4.18469 9.03664 5.40581 7.55302 7.89953 6.30616C10.6207 4.94446 14.5931 4.01866 18.9995 4.01866ZM3.99953 16.7687C4.71203 17.296 5.50421 17.7741 6.34325 18.1937C9.70187 19.8741 14.1271 20.8374 18.9997 20.8374C20.5348 20.8374 22.016 20.7249 23.4434 20.5374C22.5317 21.6999 21.7629 22.9772 21.1559 24.3437C20.4551 24.3952 19.7285 24.4187 18.9996 24.4187C14.6027 24.4187 10.6302 23.507 7.91819 22.1499C5.20619 20.7929 3.99947 19.1663 3.99947 17.8187L3.99953 16.7687ZM37.5995 17.2187C45.5729 17.2187 51.9995 23.6453 51.9995 31.6187C51.9995 39.5921 45.5729 46.0187 37.5995 46.0187C29.6261 46.0187 23.1995 39.5921 23.1995 31.6187C23.1995 23.6453 29.6261 17.2187 37.5995 17.2187ZM3.99953 23.9501C4.70267 24.468 5.47607 24.9414 6.30581 25.3563C9.67379 27.0392 14.1178 28.0188 18.9994 28.0188C19.3299 28.0188 19.651 28.0118 19.9744 28.0001C19.733 29.1696 19.5994 30.379 19.5994 31.6188C19.4002 31.6258 19.201 31.6188 18.9994 31.6188C14.6026 31.6188 10.63 30.7071 7.91801 29.3501C5.20601 27.9931 3.99929 26.3665 3.99929 25.0188L3.99953 23.9501ZM3.99953 31.1501C4.70735 31.6727 5.49017 32.1391 6.32453 32.5563C9.69251 34.2392 14.1173 35.2188 18.9995 35.2188C19.3277 35.2188 19.6534 35.2095 19.9745 35.2001C20.2253 36.4306 20.5933 37.6165 21.0808 38.7438C20.4035 38.7907 19.705 38.8188 18.9995 38.8188C14.6027 38.8188 10.6301 37.9071 7.91813 36.5501C5.20613 35.1931 3.99941 33.5665 3.99941 32.2188L3.99953 31.1501ZM3.99953 38.3501C4.70267 38.868 5.47607 39.3414 6.30581 39.7563C9.67379 41.4392 14.1178 42.4188 18.9994 42.4188C20.3846 42.4188 21.7322 42.3298 23.0307 42.1751C23.851 43.3024 24.8072 44.3219 25.862 45.2314C23.8065 45.7259 21.4675 46.0189 18.9992 46.0189C14.6047 46.0189 10.6508 45.0884 7.93637 43.7314C5.22197 42.3743 3.99887 40.7642 3.99887 39.4189L3.99953 38.3501Z" fill="#2F4786"/>
    </svg>,   
    title: "リワード",
    subtitle: `フェアな報酬と、ソーシャルグッドなトークンを受け取る`
  }
]

export default jobItem
