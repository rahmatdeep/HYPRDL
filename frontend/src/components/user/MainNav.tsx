import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export function MainNav() {
  const location = useLocation();
  return (
    <div className="hidden md:flex md:mr-auto">
      <Link to={"/"} className="mr-6 flex items-center space-x-2">
        <span className="font-bold inline-block">{siteConfig.name}</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          to={"/"}
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
        <Link
          to={"faq"}
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname?.startsWith("/faq")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          FAQ
        </Link>
        <Link
          to={"developers"}
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname?.startsWith("/developers")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Developers
        </Link>
        <Link
          to={"/contact"}
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname?.startsWith("/contact")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Contact
        </Link>
        <Link
          to={"dmca"}
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname?.startsWith("/dmca")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          DMCA and Abuse
        </Link>
        
      </nav>
    </div>
  );
}
