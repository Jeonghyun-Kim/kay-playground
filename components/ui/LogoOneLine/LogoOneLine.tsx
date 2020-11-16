import React from 'react';

interface Props {
  className?: string;
}
const LogoOneLine: React.FC<Props> = ({ className, ...props }) => (
  <svg
    id="logo-one-line"
    viewBox="0 0 2612 581"
    fill="var(--secondary)"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M1652.508,102a159.514,159.514,0,0,0-159.515,153.744h-.115V546.021a34.943,34.943,0,0,0,34.942,34.943h0a34.943,34.943,0,0,0,34.942-34.943V393.486A159.534,159.534,0,0,0,1811.9,259.24C1810.689,172.494,1739.262,102.059,1652.508,102Zm-.111,249.154a89.635,89.635,0,1,1,89.634-89.635A89.635,89.635,0,0,1,1652.4,351.154Z" />
    <rect x="1046.901" y="101" width="69.599" height="319.839" />
    <path d="M1909.5,420.839h-69.6V34.8A34.8,34.8,0,0,1,1874.7,0h0a34.8,34.8,0,0,1,34.8,34.8Z" />
    <path d="M162.337,101.586A160.363,160.363,0,1,0,322.7,261.949,160.362,160.362,0,0,0,162.337,101.586Zm0,250.471a90.109,90.109,0,1,1,90.109-90.108A90.108,90.108,0,0,1,162.337,352.057Z" />
    <path d="M2257.7,261.949A160.349,160.349,0,1,0,2187.9,394.3V421h69.6V269.976Q2257.7,265.988,2257.7,261.949Zm-160.363,90.108a90.109,90.109,0,1,1,90.109-90.108A90.108,90.108,0,0,1,2097.337,352.057Z" />
    <path d="M670.878,260.422a160.331,160.331,0,0,0-320.649,0h-.038v161.89h70.254V260.422h.039a90.082,90.082,0,0,1,180.14,0h.038v161.89h70.254V260.422Z" />
    <circle cx="1080.678" cy="34.133" r="34.475" />
    <path d="M699.437.447h-.309V424.023H852.489c2.5.116,5.009.182,7.535.182A159.976,159.976,0,0,0,1020,264.229l-.379-114.736A159.979,159.979,0,0,0,860.024.446c-1.879,0-3.7,0-5.547-.006v0ZM950.572,264.794h-.064a90.1,90.1,0,0,1-90.1,89.157c-1.832,0-3.649-.062-5.454-.169v.075H770.189V69.714h84.768l5.454-.032A90.111,90.111,0,0,1,950.4,155.118h.172Z" />
    <path d="M2535.441,262a90.1,90.1,0,0,1-180.207,0H2355V99.24h-70.1V262h.078A160.366,160.366,0,0,0,2535.9,393.957V421h-.46a90.1,90.1,0,0,1-180.207,0h-70.255a160.358,160.358,0,0,0,320.716,0h-.2V99.24h-70.6Z" />
    <path d="M1305,220c-85-10-63.846-22.846-63.846-22.846a90.117,90.117,0,0,1,143.281,22.925h74.88a160.377,160.377,0,0,0-267.838-72.6S1068.569,251.6,1304,278c107,12,63.018,46.846,63.018,46.846A90.109,90.109,0,0,1,1224.311,303h-75.159A160.374,160.374,0,0,0,1416.7,374.523C1529,275,1377.961,228.584,1305,220Z" />
  </svg>
);

export default LogoOneLine;
