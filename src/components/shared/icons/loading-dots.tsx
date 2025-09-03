import { cn } from "@/lib/utils";

const LoadingDots = ({ 
  color = "#000", 
  className 
}: { 
  color?: string;
  className?: string;
}) => {
  return (
    <span className={cn("inline-flex items-center space-x-1", className)}>
      <span 
        className="h-1 w-1 rounded-full animate-pulse"
        style={{ backgroundColor: color, animationDelay: '0ms' }}
      />
      <span 
        className="h-1 w-1 rounded-full animate-pulse"
        style={{ backgroundColor: color, animationDelay: '150ms' }}
      />
      <span 
        className="h-1 w-1 rounded-full animate-pulse"
        style={{ backgroundColor: color, animationDelay: '300ms' }}
      />
    </span>
  );
};

export default LoadingDots;