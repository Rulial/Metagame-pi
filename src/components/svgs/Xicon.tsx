import React from 'react';

interface XiconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Xicon: React.FC<XiconProps> = ({ size = 40, ...props }) => {
  const scale = size / 1221.19; // Calculate scale based on original height

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1668.56 * scale}
      height={size}
      viewBox="0 0 1668.56 1221.19"
      
      enableBackground= "new 0 0 1668.56 1221.19"
      
      xmlSpace="preserve"
      {...props}
    >
      <circle
        cx={834.28}
        cy={610.6}
        r={481.33}
        style={{
          stroke: "#fff",
          strokeMiterlimit: 10,
        }}
      />
      <path
        d="m485.39 356.79 230.07 307.62-231.52 250.11h52.11l202.7-218.98 163.77 218.98h177.32L836.82 589.6l215.5-232.81h-52.11L813.54 558.46 662.71 356.79H485.39zm76.63 38.38h81.46l359.72 480.97h-81.46L562.02 395.17z"
        style={{
          fill: "#fff",
        }}
        transform="translate(52.39 -25.059)"
      />
    </svg>
  );
};

export default Xicon;