export const calcTotalRent = (
  fechaInicio: Date,
  fechaFin: Date,
  valorPorDia: number
): number => {
  const tiempoMilisegundos = fechaFin.getTime() - fechaInicio.getTime();
  const tiempoDias = Math.ceil(tiempoMilisegundos / (1000 * 60 * 60 * 24));
  const totalRenta = tiempoDias * valorPorDia;

  return totalRenta;
};
