import Meteors from "~/components/ui/meteors";

export function MeteorBackground() {
  return (
    <div className="meteor-background absolute h-full w-full top-0 left-0 z-[0] pointer-events-none overflow-hidden">
      <Meteors number={130} />
    </div>
  );
}
