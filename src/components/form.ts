import { Params } from '../parse';

interface Attributes {
  [key: string]: string | undefined,
  id?: string,
  class?: string,
  value?: string,
};

interface InputAttributes extends Attributes {
  name: string,
};

export default class Form {
  public amount: HTMLInputElement;
  public interest: HTMLInputElement;
  public term: HTMLInputElement;
  public startDate: HTMLInputElement;
  public endDate: HTMLInputElement;

  constructor() {
    this.amount = this.input({
      id: 'amount',
      name: 'amount',
    });
    this.interest = this.input({
      id: 'interest',
      name: 'interest',
    });
    this.term = this.input({
      id: 'term',
      name: 'term',
    });
    this.startDate = this.input({
      id: 'startDate',
      name: 'startDate',
    });
    this.endDate = this.input({
      id: 'endDate',
      name: 'endDate',
    });
  }

  fill (params?: Params) {
    this.amount.value = params?.amount ? String(params.amount) : '';
    this.interest.value = params?.interest ? String(params.interest) : '';
    this.term.value = params?.term ? String(params.term) : '';
    this.startDate.value = params?.startDate ? String(params.startDate) : '';
    this.endDate.value = params?.endDate ? String(params.endDate) : '';
  }

  input (attributes: InputAttributes): HTMLInputElement {
    const input = document.createElement('input') as HTMLInputElement;
    input.setAttribute('type', 'text');
    input.setAttribute('value', '');
    Object.keys(attributes)
      .forEach((key) => input.setAttribute(key, attributes[key] || ''));
    return input;
  }

  render () {
    const form = document.createElement('form') as HTMLFormElement;
    form.appendChild(this.amount);
    form.appendChild(this.interest);
    form.appendChild(this.term);
    form.appendChild(this.startDate);
    form.appendChild(this.endDate);
    return form;
  }
};
