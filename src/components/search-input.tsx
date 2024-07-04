import { Input } from "@/components/ui/input";
import { SearchIcon } from "./icons";

export default function SearchInput() {
  return (
    <div className="relative">
      <Input placeholder="Buscar..." className="pl-10" />
      <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2" />
    </div>
  );
}
