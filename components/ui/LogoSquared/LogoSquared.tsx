import React from 'react';

interface Props {
  className?: string;
}
const LogoSquared: React.FC<Props> = ({ className = '', ...props }) => (
  <svg
    viewBox="0 0 2000 2000"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M550.028,0c-229.639,0-415.8,186.16-415.8,415.8s186.16,415.8,415.8,415.8,415.8-186.16,415.8-415.8S779.668,0,550.028,0Zm0,649.44c-129.035,0-233.639-104.605-233.639-233.64s104.6-233.64,233.639-233.64,233.64,104.6,233.64,233.64S679.064,649.44,550.028,649.44Z" />
    <path d="M1868.607,411.84C1866.471,184.033,1681.219,0,1452.908,0s-413.564,184.033-415.7,411.84h-.1V831.6h182.16V411.84h.1c2.122-127.2,105.832-229.68,233.54-229.68s231.417,102.478,233.539,229.68h.1V831.6h182.159V411.84Z" />
    <path d="M1453.054,899.929c-224.729-.152-407.856,177.988-415.788,400.746h-.3v608.057a91.08,91.08,0,0,0,91.08,91.08h0a91.08,91.08,0,0,0,91.08-91.08V1659.711a413.852,413.852,0,0,0,233.639,71.818c231.618,0,419-189.38,415.759-421.741C1865.367,1083.677,1679.186,900.083,1453.054,899.929Zm-.289,649.44c-129.035,0-233.639-104.6-233.639-233.64s104.6-233.64,233.639-233.64,233.64,104.6,233.64,233.64S1581.8,1549.369,1452.765,1549.369Z" />
    <circle cx="1777.09" cy="1909.638" r="90.638" />
    <path d="M132,898.026l-.8,0V1996.3H528.844c6.476.3,12.987.471,19.538.471,229.086,0,414.8-185.711,414.8-414.8l-.982-297.5c-14.568-215.865-194.255-386.458-413.814-386.458-4.872,0-9.6-.009-14.382-.016V898Zm651.16,685.415h-.166c-1.325,127.9-105.4,231.173-233.608,231.173-4.751,0-9.463-.159-14.144-.438v.2H315.451V1077.624H535.242l14.144-.081c124.972,0,227.025,98.119,233.33,221.523h.444Z" />
  </svg>
);

export default LogoSquared;
