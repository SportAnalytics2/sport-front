import Link from "next/link";

import Wrapper from "@/components/wrapper";
import PlayersTable from "./_components/players-table";
import CoachingStaffTable from "./_components/coaching-staff-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

import { categories } from "@/mocks/categories";
import GoBackArrow from "@/components/go-back-arrow";

export default function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const category = categories.find(
    (category) => category.id === params.categoryId,
  );

  const { id, name } = category!;

  return (
    <main>
      <Wrapper className="space-y-8">
        <GoBackArrow href="/disciplines" />

        <div className="flex w-full justify-between">
          <h3 className="text-xl">{name}</h3>
          <Link
            href={`/disciplines/${id}/arbitrary-units`}
            className={buttonVariants({ variant: "default" })}
            aria-label="Ver unidades arbitrarias"
          >
            Ver unidades arbitrarias
          </Link>
        </div>

        <section className="w-full space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cuerpo Técnico</CardTitle>
            </CardHeader>
            <CardContent>
              <CoachingStaffTable categoryId={id} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Jugadores</CardTitle>
            </CardHeader>
            <CardContent>
              <PlayersTable categoryId={id} />
            </CardContent>
          </Card>
        </section>
      </Wrapper>
    </main>
  );
}
