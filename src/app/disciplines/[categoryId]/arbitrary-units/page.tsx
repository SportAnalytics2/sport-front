import GoBackArrow from "@/components/go-back-arrow";
import Wrapper from "@/components/wrapper";
import { categories } from "@/mocks/categories";

const players = [
  "Santiago Federici",
  "Santiago Federici",
  "Santiago Federici",
  "Santiago Federici",
  "Santiago Federici",
  "Santiago Federici",
  "Santiago Federici",
  "Santiago Federici",
  "Santiago Federici",
  "Santiago Federici",
  "Santiago Federici",
  "Santiago Federici",
];

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
        <GoBackArrow href={`/disciplines/${id}`} />

        <table className="w-full border-collapse text-center">
          <thead>
            <tr>
              <th colSpan={4} className="w-1/7 border p-4">
                Jugador
              </th>
              <th colSpan={4} className="w-1/7 border p-4">
                Lunes
              </th>
              <th colSpan={4} className="w-1/7 border p-4">
                Martes
              </th>
              <th colSpan={4} className="w-1/7 border p-4">
                Miercoles
              </th>
              <th colSpan={4} className="w-1/7 border p-4">
                Jueves
              </th>
              <th colSpan={4} className="w-1/7 border p-4">
                Viernes
              </th>
              <th colSpan={3} className="w-1/7 border p-4">
                Resultados
              </th>
            </tr>

            <tr>
              <th className="border py-1 text-sm" colSpan={4}></th>
              <th className="border py-1 text-sm">TQR</th>
              <th className="border py-1 text-sm">T</th>
              <th className="border py-1 text-sm">RPE</th>
              <th className="border py-1 text-sm">UA</th>
              <th className="border py-1 text-sm">TQR</th>
              <th className="border py-1 text-sm">T</th>
              <th className="border py-1 text-sm">RPE</th>
              <th className="border py-1 text-sm">UA</th>
              <th className="border py-1 text-sm">TQR</th>
              <th className="border py-1 text-sm">T</th>
              <th className="border py-1 text-sm">RPE</th>
              <th className="border py-1 text-sm">UA</th>
              <th className="border py-1 text-sm">TQR</th>
              <th className="border py-1 text-sm">T</th>
              <th className="border py-1 text-sm">RPE</th>
              <th className="border py-1 text-sm">UA</th>
              <th className="border py-1 text-sm">TQR</th>
              <th className="border py-1 text-sm">T</th>
              <th className="border py-1 text-sm">RPE</th>
              <th className="border py-1 text-sm">UA</th>
              <th className="border py-1 text-sm">TUA</th>
              <th className="border py-1 text-sm">M Exp</th>
              <th className="border py-1 text-sm">Dif T-R</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index}>
                <td className="border p-2" colSpan={4}>
                  {player}
                </td>
                <td className="border p-2">10</td>
                <td className="border p-2">0</td>
                <td className="border p-2">6</td>
                <td className="border p-2">0</td>
                <td className="border p-2">3</td>
                <td className="border p-2">0</td>
                <td className="border p-2">3</td>
                <td className="border p-2">0</td>
                <td className="border p-2">5</td>
                <td className="border p-2">0</td>
                <td className="border p-2">5</td>
                <td className="border p-2">0</td>
                <td className="border p-2">4</td>
                <td className="border p-2">0</td>
                <td className="border p-2">9</td>
                <td className="border p-2">0</td>
                <td className="border p-2">4</td>
                <td className="border p-2">60</td>
                <td className="border p-2">5</td>
                <td className="border p-2">300</td>
                <td className="border p-2">300</td>
                <td className="border p-2">60</td>
                <td className="border bg-yellow-300 p-2">-2</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Wrapper>
    </main>
  );
}
