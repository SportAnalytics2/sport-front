import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { categories } from "@/mocks/categories";

export default function CoachingStaffTable({
  categoryId,
}: {
  categoryId: string;
}) {
  const category = categories.find((category) => category.id === categoryId);
  const { players } = category!;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nombre</TableHead>
          <TableHead className="text-right">Rol</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {players &&
          players.map((player) => (
            <TableRow key={player.id}>
              <TableCell>
                <Link
                  href={`/disciplines/${category?.id}/${player.id}`}
                  className="flex items-center gap-2 font-medium"
                >
                  <img
                    src={player.image}
                    alt="Foto del jugador"
                    className="size-8 rounded-full"
                  />
                  <p>{player.name}</p>
                </Link>
              </TableCell>
              <TableCell className="text-right">{player.position}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
