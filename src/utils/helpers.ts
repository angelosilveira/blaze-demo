export const formatCurrencyBRL = (value: number | string): string => {
  return Number(value ?? '0')
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace(',', '.');
};
