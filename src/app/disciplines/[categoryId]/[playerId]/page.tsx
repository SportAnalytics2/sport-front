import Link from "next/link";

import Wrapper from "@/components/wrapper";
import PlayerCardHeader from "./_components/player-card-header";
import PlayerStats from "./_components/player-stats";

import { categories } from "@/mocks/categories";

export default function PlayerPage({
  params,
}: {
  params: { categoryId: string; playerId: string };
}) {
  const { categoryId, playerId } = params;

  const category = categories.find((category) => category.id === categoryId);
  const player = category?.players?.find((player) => player.id === playerId);

  const { id, name } = player!;
  return (
    <main>
      <Wrapper>
        <Link href={`/disciplines/${categoryId}`} aria-label="Volver atrás">
          Volver
        </Link>

        <article className="w-full rounded-md border border-border bg-background p-12 shadow">
          <PlayerCardHeader />

          <div className="my-8 h-[2px] w-full bg-border"></div>

          <PlayerStats />
        </article>
      </Wrapper>
    </main>
  );
}
