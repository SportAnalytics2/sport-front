import Link from "next/link";
import { GoBackArrowIcon } from "./icons";

export default function GoBackArrow({ href }: { href: string }) {
  return (
    <Link
      href={href}
      aria-label="Volver atrás"
      className="group mb-8 flex w-fit rounded-full border p-2 duration-200 hover:bg-muted"
    >
      <GoBackArrowIcon />
    </Link>
  );
}
