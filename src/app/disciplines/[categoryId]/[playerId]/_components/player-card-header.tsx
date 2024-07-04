import { Button } from "@/components/ui/button";
import { ShareIcon, TwoDirectionArrowsIcon } from "@/components/icons";

export default function PlayerCardHeader() {
  return (
    <section className="flex items-center justify-between">
      <article className="flex items-center gap-4">
        <div className="relative size-28">
          <img
            src="https://github.com/shadcn.png"
            alt="Avatar del jugador"
            className="rounded-full object-cover"
          />
          <span className="absolute -bottom-2 -right-2 grid size-10 place-content-center rounded-full border-4 border-card bg-primary p-1 font-medium text-white">
            5
          </span>
        </div>

        <div>
          <h1 className="text-2xl">Nombre del jugador</h1>
          <p className="text-xl text-muted-foreground">
            Descripción del jugador
          </p>
        </div>
      </article>

      <div className="flex gap-4">
        <Button variant={"outline"} className="flex items-center gap-2">
          <ShareIcon className="size-4" />
          Compartir
        </Button>
        <Button className="flex items-center gap-2">
          <TwoDirectionArrowsIcon className="size-5" />
          Comparar
        </Button>
      </div>
    </section>
  );
}
