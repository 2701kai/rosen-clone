interface RosenLogoProps {
  className?: string;
}

export function RosenLogo({ className }: RosenLogoProps) {
  return (
    <svg className={className} viewBox="0 0 103 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* ROSEN text logo approximation */}
      <text
        x="0"
        y="18"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="bold"
        fill="#1395D9"
      >
        ROSEN
      </text>
    </svg>
  );
}
