import { format } from 'date-fns';

const DATE_FORMAT = 'dd/MM/yyyy';

export const dateFormatter = (date: Date) => {
  return format(date, DATE_FORMAT);
};
