import Wrapper from "@/components/wrapper";
import { categories } from "@/mocks/categories";
import Link from "next/link";

export default function ArbitraryUnitsPage({
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
      <Wrapper>
        <Link href={`/disciplines/${id}`} aria-label="Volver atrás">
          Volver
        </Link>
        <p>
          Unidades Arbitrarias para{" "}
          <strong>
            {name} (id {id})
          </strong>
        </p>
      </Wrapper>
    </main>
  );
}
