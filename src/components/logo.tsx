
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Logo({ className }: { className?: string }) {
  const logoData = PlaceHolderImages.find(p => p.id === 'app-logo');
  
  if (!logoData) return null;

  return (
    <div className={cn(
      "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20 overflow-hidden", 
      className
    )}>
      <Image
        src={logoData.imageUrl}
        alt={logoData.description}
        width={24}
        height={24}
        className="object-contain"
        priority
      />
    </div>
  );
}

export function Favicon() {
  const logoData = PlaceHolderImages.find(p => p.id === 'app-logo');
  
  if (!logoData) return null;

  return (
    <Image
      src={logoData.imageUrl}
      alt="Favicon"
      width={32}
      height={32}
    />
  );
}
