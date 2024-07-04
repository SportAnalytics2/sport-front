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
  const { coachingStaff } = category!;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nombre</TableHead>
          <TableHead className="text-right">Rol</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coachingStaff &&
          coachingStaff.map((member) => (
            <TableRow key={member.id}>
              <TableCell className="flex items-center gap-2 font-medium">
                <img
                  src={member.image}
                  alt="Foto del coach"
                  className="size-8 rounded-full"
                />
                {member.name}
              </TableCell>{" "}
              <TableCell className="text-right">{member.rol}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
