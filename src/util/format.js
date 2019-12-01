export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const formatMonthDuration = countMonths => {
  if (countMonths > 1) {
    return `${countMonths} meses`;
  }
  return `${countMonths} mês`;
};
