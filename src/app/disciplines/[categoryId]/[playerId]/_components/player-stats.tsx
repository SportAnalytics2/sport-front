import PlayerStatsBarChart from "./player-stats-bar-chart";
import PlayerInfo from "./player-info";

export default function PlayerStats() {
  return (
    <section className="flex flex-col justify-between gap-20 lg:flex-row">
      <PlayerInfo />

      <PlayerStatsBarChart />
    </section>
  );
}
