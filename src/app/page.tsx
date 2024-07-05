import Link from "next/link";

import Wrapper from "@/components/wrapper";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Wrapper>
        <p>Aqui iria probablemente un login</p>
        <Link
          href={"/disciplines"}
          className={buttonVariants({ variant: "secondary" })}
        >
          Ir a disciplinas
        </Link>
      </Wrapper>
    </main>
  );
}
