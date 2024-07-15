import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { pages } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center h-full w-60 p-2 bg-accent/50 gap-4 relative">
      <div className="flex items-center gap-4">
        <img className="h-8 w-8" src="/favicon.ico" alt="FlowSpace Logo" />
        <span className="text-2xl font-bold">Flow Wiki</span>
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        {pages.map((page) => (
          <Link
            unstable_viewTransition
            key={page.name}
            to={page.href}
            className={buttonVariants({ variant: "outline" }) + " w-full"}
          >
            {page.name}
          </Link>
        ))}
      </div>
      <div>
        <a
          className="underline absolute bottom-4 w-full left-0 text-center"
          target="_blank"
          href="https://github.com/spaceofnova/flowspace-wiki"
        >
          Edit this page on GitHub
        </a>
      </div>
    </nav>
  );
}
