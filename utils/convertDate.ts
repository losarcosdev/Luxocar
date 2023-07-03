export const convertDate = (fechaISO: Date): string => {
  const date = new Date(fechaISO);
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  const fechaLegible = date.toLocaleDateString("en-US", dateOptions as any);

  return `${fechaLegible}`;
};
