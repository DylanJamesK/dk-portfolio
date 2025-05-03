import { useState } from 'react';

const DKLogo = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-50 h-8 overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* SVG Logo */}
      <div
        className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${
          hovered ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
        }`}
      >
        <svg
          className="fill-dynamic w-4 h-8"
          id="Layer_3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1300.75439 2242"
        >
          <path d="M0,1522.98233c321.28064,0,581.73675-260.45598,581.73675-581.73675H0v581.73675Z" strokeWidth="0"/>
          <path d="M581.73675,941.24558h359.50884C941.24558,421.41296,519.83262,0,0,0v359.50884c321.28064,0,581.73675,260.45604,581.73675,581.73675Z" strokeWidth="0"/>
          <path d="M1126.71802,1591.62091c110.67786-191.32544,174.03638-413.44879,174.03638-650.37531h-359.50879c0,519.83258-421.41296,941.24554-941.24561,941.24554v359.50885c338.22919,0,646.29559-129.1076,877.63916-340.71161v.00024c41.05151,105.6543,63.60645,220.54639,63.60645,340.71136h359.50879c0-236.92542-63.3573-459.0495-174.03528-650.37732l-.0011-.00177Z" strokeWidth="0"/>
        </svg>
      </div>

      {/* Name Text */}
      <div
        className={`absolute top-0 left-0 h-full w-full flex txt-dynamic font-bold text-2xl transition-all duration-300 ease-in-out cursor-default ${
          hovered
            ? 'delay:200 translate-x-0 opacity-100'
            : '-translate-x-full opacity-0'
        }`}
      >
        Dylan J Kerr
      </div>
    </div>
  );
};

export default DKLogo;
