import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/disciplines"}>Ir a disciplinas</Link>
    </main>
  );
}
