import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
    >
      {/* Antennas */}
      <rect x="105" y="60" width="20" height="120" rx="10" fill="#1E293B" />
      <circle cx="115" cy="65" r="35" fill="#1E293B" />
      <rect x="387" y="60" width="20" height="120" rx="10" fill="#1E293B" />
      <circle cx="397" cy="65" r="35" fill="#1E293B" />
      
      {/* Outer Head / Bubble */}
      <rect x="20" y="110" width="472" height="350" rx="120" fill="#CBD5E1" />
      
      {/* Tail of the Chat Bubble */}
      <path d="M256 500C220 500 210 460 210 440L302 440C302 460 292 500 256 500Z" fill="#CBD5E1" />
      
      {/* Face Area */}
      <rect x="70" y="170" width="372" height="230" rx="80" fill="#334155" />
      
      {/* Eyes */}
      <circle cx="185" cy="275" r="45" fill="#0EA5E9" />
      <circle cx="327" cy="275" r="45" fill="#0EA5E9" />
      
      {/* Mouth */}
      <path d="M190 340C190 340 210 395 256 395C302 395 322 340 322 340H190Z" fill="white" />
      <path d="M225 380C225 380 240 405 256 405C272 405 287 380 287 380H225Z" fill="#0EA5E9" />
    </svg>
  );
}

export function Favicon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="105" y="60" width="20" height="120" rx="10" fill="#1E293B" />
      <circle cx="115" cy="65" r="35" fill="#1E293B" />
      <rect x="387" y="60" width="20" height="120" rx="10" fill="#1E293B" />
      <circle cx="397" cy="65" r="35" fill="#1E293B" />
      <rect x="20" y="110" width="472" height="350" rx="120" fill="#CBD5E1" />
      <path d="M256 500C220 500 210 460 210 440L302 440C302 460 292 500 256 500Z" fill="#CBD5E1" />
      <rect x="70" y="170" width="372" height="230" rx="80" fill="#334155" />
      <circle cx="185" cy="275" r="45" fill="#0EA5E9" />
      <circle cx="327" cy="275" r="45" fill="#0EA5E9" />
      <path d="M190 340C190 340 210 395 256 395C302 395 322 340 322 340H190Z" fill="white" />
    </svg>
  );
}
