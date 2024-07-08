import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function PlayerArbitraryUnits() {
  return (
    <article className="space-y-4">
      <h3 className="text-xl font-medium">
        Unidades Arbitrarias - Semana del 1 al 7 de julio de 2024
      </h3>

      <ScrollArea className="w-full whitespace-nowrap">
        <table className="w-full border-collapse text-center">
          <thead>
            <tr>
              <th colSpan={4} className="w-1/6 border p-4">
                Lunes
              </th>
              <th colSpan={4} className="w-1/6 border p-4">
                Martes
              </th>
              <th colSpan={4} className="w-1/6 border p-4">
                Miercoles
              </th>
              <th colSpan={4} className="w-1/6 border p-4">
                Jueves
              </th>
              <th colSpan={4} className="w-1/6 border p-4">
                Viernes
              </th>
              <th colSpan={3} className="w-1/6 border p-4">
                Resultados
              </th>
            </tr>
            <tr>
              <th className="border px-2 py-1 text-sm">TQR</th>
              <th className="border px-2 py-1 text-sm">T</th>
              <th className="border px-2 py-1 text-sm">RPE</th>
              <th className="border px-2 py-1 text-sm">UA</th>
              <th className="border px-2 py-1 text-sm">TQR</th>
              <th className="border px-2 py-1 text-sm">T</th>
              <th className="border px-2 py-1 text-sm">RPE</th>
              <th className="border px-2 py-1 text-sm">UA</th>
              <th className="border px-2 py-1 text-sm">TQR</th>
              <th className="border px-2 py-1 text-sm">T</th>
              <th className="border px-2 py-1 text-sm">RPE</th>
              <th className="border px-2 py-1 text-sm">UA</th>
              <th className="border px-2 py-1 text-sm">TQR</th>
              <th className="border px-2 py-1 text-sm">T</th>
              <th className="border px-2 py-1 text-sm">RPE</th>
              <th className="border px-2 py-1 text-sm">UA</th>
              <th className="border px-2 py-1 text-sm">TQR</th>
              <th className="border px-2 py-1 text-sm">T</th>
              <th className="border px-2 py-1 text-sm">RPE</th>
              <th className="border px-2 py-1 text-sm">UA</th>
              <th className="border px-2 py-1 text-sm">TUA</th>
              <th className="border px-2 py-1 text-sm">M Exp</th>
              <th className="border px-2 py-1 text-sm">Dif T-R</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-3">10</td>
              <td className="border px-2 py-3">0</td>
              <td className="border px-2 py-3">6</td>
              <td className="border px-2 py-3">0</td>
              <td className="border px-2 py-3">3</td>
              <td className="border px-2 py-3">0</td>
              <td className="border px-2 py-3">3</td>
              <td className="border px-2 py-3">0</td>
              <td className="border px-2 py-3">5</td>
              <td className="border px-2 py-3">0</td>
              <td className="border px-2 py-3">5</td>
              <td className="border px-2 py-3">0</td>
              <td className="border px-2 py-3">4</td>
              <td className="border px-2 py-3">0</td>
              <td className="border px-2 py-3">9</td>
              <td className="border px-2 py-3">0</td>
              <td className="border px-2 py-3">4</td>
              <td className="border px-2 py-3">60</td>
              <td className="border px-2 py-3">5</td>
              <td className="border px-2 py-3">300</td>
              <td className="border px-2 py-3">300</td>
              <td className="border px-2 py-3">60</td>
              <td className="border bg-yellow-300 px-2 py-3 dark:bg-yellow-500 dark:text-black">
                -2
              </td>
            </tr>
          </tbody>
        </table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </article>
  );
}
