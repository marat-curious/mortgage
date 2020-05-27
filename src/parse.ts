import {
  PropertyRequiredError,
  PropertyTypeError,
  PropertyFormatError,
} from './errors/validation';

interface Payment {
  date: string,
  payment: number,
};

export interface Params {
  [index: string]: string | number | Payment[] | undefined,
  amount?: number,
  interest?: number,
  term?: number,
  startDate?: string,
  endDate?: string,
  payments?: Payment[],
}

function validateProperties(data: Params): void {
  [
    'amount',
    'interest',
    'term',
    'startDate',
    'endDate',
  ]
    .filter((option) => typeof data[option] === 'undefined')
    .forEach((option) => {
      throw new PropertyRequiredError(option);
    });
}

function validatePropertiesType(data: Params): void {
  [
    'amount',
    'term',
  ]
    .forEach((option) => {
      if (Number.isNaN(parseInt(data[option] as string, 10))) {
        throw new PropertyTypeError(option);
      }
    });

  if (typeof data.interest === 'string'
    && Number.isNaN(parseFloat(data.interest))) {
    throw new PropertyTypeError('interest');
  }
}

function validatePropertiesFormat(data: Params): void {
  const regexDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g;
  [
    'startDate',
    'endDate',
  ]
    .forEach((option) => {
      const date = String(data[option]) || '';
      if (!date.match(regexDate)) {
        throw new PropertyFormatError(option);
      }
    });
}

export default (data: string) => {
  const parsed = JSON.parse(data);
  validateProperties(parsed);
  validatePropertiesType(parsed);
  validatePropertiesFormat(parsed);
  return parsed;
};
