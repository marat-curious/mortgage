import { Params } from '../parse';

interface Attributes {
  [key: string]: string | undefined,
  id?: string,
  class?: string,
};

interface InputAttributes extends Attributes {
  name: string,
  value: string,
};

export default class Form {
  #amount: number;
  #interest: number;
  #term: number;
  #startDate: string;
  #endDate: string;

  constructor(params?: Params) {
    this.#amount = params?.amount || 0;
    this.#interest = params?.interest || 0;
    this.#term = params?.term || 0;
    this.#startDate = params?.startDate || '';
    this.#endDate = params?.endDate || '';
  }

  input (attributes: InputAttributes): HTMLInputElement {
    const input = document.createElement('input') as HTMLInputElement;
    input.setAttribute('type', 'text');
    Object.keys(attributes)
      .forEach((key) => input.setAttribute(key, attributes[key] || ''));
    return input;
  }

  render () {
    const form = document.createElement('form') as HTMLFormElement;

    const inputAmount = this.input({
      id: 'amount',
      name: 'amount',
      value: this.#amount.toString(),
    });
    const inputInterest = this.input({
      id: 'interest',
      name: 'interest',
      value: this.#interest.toString(),
    });
    const inputTerm = this.input({
      id: 'term',
      name: 'term',
      value: this.#term.toString(),
    });
    const inputStartDate = this.input({
      id: 'startDate',
      name: 'startDate',
      value: this.#startDate,
    });
    const inputEndDate = this.input({
      id: 'endDate',
      name: 'endDate',
      value: this.#endDate,
    });

    form.appendChild(inputAmount);
    form.appendChild(inputInterest);
    form.appendChild(inputTerm);
    form.appendChild(inputStartDate);
    form.appendChild(inputEndDate);

    return form;
  }
};
