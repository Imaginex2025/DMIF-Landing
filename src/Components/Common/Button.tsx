
import type { ReactNode } from "react";
import { cn } from "../../lib/utils"; // optional if you're using clsx/classnames

interface IconButtonProps {
  label: string;
  icon?: ReactNode| null; 
  onClick?: () => void;
  iconPosition?: "left" | "right";
  className?: string;
}

const IconButton = ({
  label,
  icon,
  onClick,
  iconPosition = "left",
  className = "",
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 bg-blue-900 justify-center cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors",
        className
      )}
    >
      {iconPosition === "left" && icon}
      <span>{label}</span>
      {iconPosition === "right" && icon}
    </button>
  );
};

export default IconButton;
