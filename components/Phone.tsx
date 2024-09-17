import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Phoneprops extends HTMLAttributes<HTMLDivElement> {
  imgsrc: string;
  dark?: boolean;
}

const Phone = ({ className, imgsrc, dark = false, ...props }: Phoneprops) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt=""
        className="pointer-events-none z-50 select-none"
      />

      <div className="absolute -z-10 inset-0">
        <img src={imgsrc} alt="kjef" className="object-cover" />
      </div>
    </div>
  );
};

export default Phone;
