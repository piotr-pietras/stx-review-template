import { format } from 'date-fns';

const DATE_FORMAT = 'EEE d MMMM y';

export const dateFormatter = (date: Date) => {
  return format(date, DATE_FORMAT);
};
