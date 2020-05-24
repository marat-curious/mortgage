import {
  PropertyRequiredError,
  PropertyTypeError,
  PropertyFormatError,
} from './errors/validation';

type Options = {
  [option: string]: number | string,
  amount: number,
  interest: number,
  term: number,
  startDate: string,
  endDate: string,
}

function validateProperty(data: Options): void {
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

function validatePropertyType(data: Options): void {
  const regexDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g;
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

  [
    'startDate',
    'endDate',
  ]
    .forEach((option) => {
      if (!data[option].toString().match(regexDate)) {
        throw new PropertyFormatError(option);
      }
    });
}

export default (data: string) => {
  const parsed = JSON.parse(data);
  validateProperty(parsed);
  validatePropertyType(parsed);
  return parsed;
};
