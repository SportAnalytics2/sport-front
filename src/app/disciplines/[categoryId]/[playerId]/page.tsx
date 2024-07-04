import Link from "next/link";

import Wrapper from "@/components/wrapper";

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
        <p>
          Detalles de{" "}
          <strong>
            {name} (id {id})
          </strong>
        </p>
      </Wrapper>
    </main>
  );
}
