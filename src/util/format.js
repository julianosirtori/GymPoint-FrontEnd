import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

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

export function formatDate(date) {
  return format(parseISO(date), "'dia' dd 'de' MMMM 'de' yyyy", {
    locale: pt,
  });
}
