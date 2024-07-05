import PlayerStatsBarChart from "./player-stats-bar-chart";
import PlayerInfo from "./player-info";

export default function PlayerStats() {
  return (
    <section className="flex justify-between gap-20">
      <PlayerInfo />

      <PlayerStatsBarChart />
    </section>
  );
}
