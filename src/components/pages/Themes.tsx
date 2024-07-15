import { Badge } from "../ui/badge";

export default function ThemesPage() {
  const vars = [
    "--background: 1 26% 95%;",
    "--foreground: 1 5% 0%;",
    "--card: 1 26% 90%;",
    "--card-foreground: 1 5% 10%;",
    "--popover: 1 26% 95%;",
    "--popover-foreground: 1 95% 0%;",
    "--primary: 1 35.3% 67.3%;",
    "--primary-foreground: 0 0% 0%;",
    "--secondary: 1 26% 70%;",
    "--secondary-foreground: 0 0% 0%;",
    "--muted: -37 26% 85%;",
    "--muted-foreground: 1 5% 35%;",
    "--accent: -37 26% 80%;",
    "--accent-foreground: 1 5% 10%;",
    "--destructive: 0 50% 30%;",
    "--destructive-foreground: 1 5% 90%;",
    "--border: 1 26% 50%;",
    "--input: 1 26% 18%;",
    "--ring: 1 35.3% 67.3%;",
    "--radius: 0.5rem;",
  ];
  return (
    <div className="">
      <h1 className="text-4xl font-bold content">Themes</h1>
      <div>
        <p>
          Since Flowspace uses <Badge variant={"outline"}>shadcn/ui</Badge> for
          its UI, <br /> you can use The following css globals to customize the
          theme:
        </p>
        <br />
        <div className="flex flex-col">
          {vars.map((varName) => (
            <code key={varName}>{varName}</code>
          ))}
        </div>
        <br />
        <div>
          Values are formatted as:{" "}
          <code>--variable-name: hue saturation lightness;</code>
        </div>
        <br />
        easier ways to customize the theme are coming soon!
      </div>
    </div>
  );
}
