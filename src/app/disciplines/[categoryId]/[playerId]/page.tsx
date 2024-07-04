import Link from "next/link";

import Wrapper from "@/components/wrapper";
import PlayerCardHeader from "./_components/player-card-header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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

        <Card className="w-full space-y-8 p-12">
          <CardHeader>
            <PlayerCardHeader />
          </CardHeader>

          <Separator className="h-[2px]" />

          <CardContent></CardContent>

          <CardFooter></CardFooter>
        </Card>
      </Wrapper>
    </main>
  );
}
