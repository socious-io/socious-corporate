import React from "react";

function CheckMarkLang() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="14"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        fill="#00BA88"
        d="M16.422 2.402a.5.5 0 000-.708l-.71-.708a.5.5 0 00-.706 0L5.45 10.54 1.56 6.648a.5.5 0 00-.708 0l-.706.706a.5.5 0 000 .707L5.1 13.015a.5.5 0 00.71-.001L16.421 2.402z"
      ></path>
    </svg>
  );
}

export default React.memo(CheckMarkLang);
