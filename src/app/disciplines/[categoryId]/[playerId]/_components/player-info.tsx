export default function PlayerInfo() {
  return (
    <article className="flex w-[40%] justify-between py-4">
      <div className="space-y-4">
        <div>
          <p className="text-muted-foreground">Edad</p>
          <p>25 años</p>
        </div>
        <div>
          <p className="text-muted-foreground">Pie dominante</p>
          <p>Derecho</p>
        </div>
        <div>
          <p className="text-muted-foreground">Nacionalidad</p>
          <p>Argentino</p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-muted-foreground">Altura</p>
          <p>180cm</p>
        </div>
        <div>
          <p className="text-muted-foreground">Peso</p>
          <p>80kg</p>
        </div>
        <div>
          <p className="text-muted-foreground">Numero de camiseta</p>
          <p>#10</p>
        </div>
      </div>
    </article>
  );
}
