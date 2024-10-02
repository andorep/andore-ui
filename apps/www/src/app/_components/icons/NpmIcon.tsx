import React from "react";

const NpmIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 700 700" fill="currentColor" aria-hidden="true" {...props}>
      <polygon fill="#cb3837" points="0,700 700,700 700,0 0,0"></polygon>
      <polygon
        fill="#ffffff"
        points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 "
      ></polygon>
    </svg>
  );
};

export default NpmIcon;
