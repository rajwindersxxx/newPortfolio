interface props {
  className?: string;
  storkWidth?: number;
}
export function GitHubIcon({ className }: props) {
  return (
    <svg
      className={className}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
    >
      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: props) {
  return (
    <svg
      className={className}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
    >
      <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
    </svg>
  );
}

export function MenuIcon({ className }: props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
}

export function LogoIcon({ className, storkWidth = 102.01 }: props) {
  const halfWidth: string = `${Number(storkWidth) / 2}px`;
  const doubleWidth: string = `${Number(storkWidth) * 2}px`;
  return (
    <svg
      viewBox="0 0 2000 2000"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      className={className}
    >
      <path
        d="M875.969 253.695l543.111 408.876-207.45 661.579H540.309l-207.45-661.579 543.11-408.876z"
        fill="none"
        strokeWidth={halfWidth}
        transform="matrix(1.75113 0 0 1.68996 -533.937 -371.886)"
      />
      <path
        d="M875.969 253.695l543.111 408.876-207.45 661.579H540.309l-207.45-661.579 543.11-408.876z"
        fill="none"
        strokeWidth={halfWidth}
        transform="matrix(1.41629 0 0 1.36681 -240.626 -98.692)"
      />
      <path
        d="M875.969 253.695l543.111 408.876-207.45 661.579H540.309l-207.45-661.579 543.11-408.876z"
        fill="none"
        strokeWidth={halfWidth}
        transform="matrix(1.41629 0 0 1.36681 -240.626 -98.692)"
      />
      <path
        d="M230.799 806.919c358.441 143.349 205.936 131.394 673.366 75.664 230.325-27.46 462.495 53.61 462.495 53.61"
        fill="none"
        strokeWidth={storkWidth}
        transform="rotate(157.674 961.17 954.826)"
      />
      <path
        d="M337.377 157.348c138.126 382.538 37.706 761.993 360.284 761.978 297.258-.014 147.3-2.53 147.3-2.53"
        fill="none"
        strokeWidth={storkWidth}
        transform="rotate(90.3 347.425 1154.843)"
      />
      <path
        d="M230.799 806.919C565.891 932.3 543.155 1006.79 656.851 1006.79c113.695 0 180.552-7.829 198.82-5.55"
        fill="none"
        strokeWidth={storkWidth}
        transform="rotate(-177.94 859.426 1235.477)"
      />
      <path
        d="M230.799 806.919c271.363 71.073 606.604 192.042 624.872 194.321"
        fill="none"
        strokeWidth={doubleWidth}
        transform="matrix(-.1501 -.31962 .46786 -.21972 657.117 775.69)"
      />
      <path
        d="M1000 524.623C888.889 637.726 750.646 731.341 750.646 731.341"
        fill="none"
        strokeWidth={storkWidth}
      />
      <ellipse
        cx={329.457}
        cy={202.584}
        rx={52.972}
        ry={45.478}
        fill="none"
        strokeWidth={storkWidth}
        transform="translate(235.142 923.514)"
      />
      <ellipse
        cx={329.457}
        cy={202.584}
        rx={52.972}
        ry={45.478}
        fill="none"
        strokeWidth={storkWidth}
        transform="translate(392.765 552.013)"
      />
      <ellipse
        cx={329.457}
        cy={202.584}
        rx={52.972}
        ry={45.478}
        fill="none"
        strokeWidth={storkWidth}
        transform="translate(869.509 461.057)"
      />
      <ellipse
        cx={329.457}
        cy={202.584}
        rx={52.972}
        ry={45.478}
        fill="none"
        strokeWidth={storkWidth}
        transform="translate(1068.48 923.514)"
      />
      <ellipse
        cx={329.457}
        cy={202.584}
        rx={52.972}
        ry={45.478}
        fill="none"
        strokeWidth={storkWidth}
        transform="translate(462.532 1263.57)"
      />
      <path
        d="M230.799 795.349c441.036 129.199 294.88 100.5 428.116 118.863 217.132 29.926 540.055-250.571 540.055-250.571"
        fill="none"
        strokeWidth={storkWidth}
        transform="translate(7.34 22.222)"
      />
    </svg>
  );
}
