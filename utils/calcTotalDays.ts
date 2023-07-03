export const calcTotalDays = (fechaInicio: Date, fechaFin: Date): number => {
  const tiempoMilisegundos = fechaFin.getTime() - fechaInicio.getTime();
  const cantidadDias = Math.ceil(tiempoMilisegundos / (1000 * 60 * 60 * 24));

  return cantidadDias;
};
