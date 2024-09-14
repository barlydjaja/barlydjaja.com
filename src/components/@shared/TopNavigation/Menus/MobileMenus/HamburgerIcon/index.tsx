interface HamburgerProps {
  width: number;
  height: number;
  onClick?: () => void;
}

const HamburgerIcon = ({width, height, onClick}: HamburgerProps) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path d="M3 28H38M3 15.5H38M3 3H38" stroke="url(#paint0_linear_23_9)" strokeWidth="5" strokeLinecap="round"
            strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_23_9" x1="-4.5" y1="-4" x2="46" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5782FF"/>
          <stop offset="0.46" stopColor="#F462D6"/>
          <stop offset="1" stopColor="#1C4587"/>
        </linearGradient>
      </defs>
    </svg>

  );
};

export default HamburgerIcon;
