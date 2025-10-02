import { forwardRef } from "react";
import { IconProps } from "@phosphor-icons/react";

// Bitcoin Icon Component
export const BitcoinIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <svg ref={ref} viewBox="0 0 256 256" fill="currentColor" {...props}>
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="currentColor"
      />
    </svg>
  )
);
BitcoinIcon.displayName = "BitcoinIcon";

// Ethereum Icon Component
export const EthereumIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <svg ref={ref} viewBox="0 0 256 256" fill="currentColor" {...props}>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="currentColor"
      />
    </svg>
  )
);
EthereumIcon.displayName = "EthereumIcon";

// Solana Icon Component
export const SolanaIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg ref={ref} viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-1c-.9 0-1.64.58-1.9 1.39-.26.81.05 1.69.75 2.19l1.15.82c.5.36 1.1.54 1.7.54s1.2-.18 1.7-.54l1.15-.82c.7-.5 1.01-1.38.75-2.19z"
      fill="currentColor"
    />
  </svg>
));
SolanaIcon.displayName = "SolanaIcon";

// USDC Icon Component
export const USDCIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg ref={ref} viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"
      fill="currentColor"
    />
  </svg>
));
USDCIcon.displayName = "USDCIcon";

// USDT Icon Component
export const USDTIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg ref={ref} viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"
      fill="currentColor"
    />
  </svg>
));
USDTIcon.displayName = "USDTIcon";

// Move Icon Component
export const MoveIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg ref={ref} viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="currentColor"
    />
  </svg>
));
MoveIcon.displayName = "MoveIcon";

// Movement Icon Component
export const MovementIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <svg ref={ref} viewBox="0 0 256 256" fill="currentColor" {...props}>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="currentColor"
      />
    </svg>
  )
);
MovementIcon.displayName = "MovementIcon";
