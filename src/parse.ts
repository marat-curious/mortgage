import { PropertyRequiredError } from './errors/validation';

type Options = {
  [option: string]: number | string,
  amount: number,
  interest: number,
  term: number,
  startDate: string,
  endDate: string,
}

function validate(data: Options): void {
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

export default (data: string) => {
  const parsed = JSON.parse(data);
  validate(parsed);
  return parsed;
};
