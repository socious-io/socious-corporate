import React from "react";

function CrossButtonSidebar({ handleClick }) {

  return (
    <div className="pt-1" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        fill="none"
        viewBox="0 0 20 21"
      >
        <path
          fill="#2F4786"
          d="M12.395 10.275a.398.398 0 010-.54l7.114-7.115a1.506 1.506 0 000-2.163 1.509 1.509 0 00-2.162 0L10.232 7.57a.398.398 0 01-.54 0L2.576.457A1.508 1.508 0 00.457.5a1.508 1.508 0 000 2.162L7.57 9.777a.398.398 0 010 .54L.457 17.433a1.507 1.507 0 000 2.163 1.51 1.51 0 002.163 0l7.114-7.115a.398.398 0 01.54 0l7.115 7.115a1.53 1.53 0 002.163-2.163l-7.157-7.157z"
        ></path>
      </svg>
    </div>
  );
}

export default CrossButtonSidebar;
