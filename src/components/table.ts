import { Params } from '../parse';

export default class Table {
  private _table: HTMLDivElement;
  constructor () {
    this._table = document.createElement('div');
    this.fill = this.fill.bind(this);
  }
  public fill (data?: Params): void {
    const { payments = [] } = data || {};
    const rows = this._table.children;
    [...rows].forEach((row) => {
      const payment = payments.shift();
      if (payment) {
        const spans = row.children;
        (spans[0] as HTMLSpanElement).innerText = payment.date;
        (spans[1] as HTMLSpanElement).innerText = payment.payment.toString();
      } else {
        row.remove();
      }
    });
    payments.forEach((payment) => {
      const row = document.createElement('div');
      const spanDate = document.createElement('span');
      const spanPayment = document.createElement('span');
      row.classList.add('payment');
      spanDate.innerText = payment.date;
      spanPayment.innerText = payment.payment.toString();
      row.appendChild(spanDate);
      row.appendChild(spanPayment);
      this._table.appendChild(row);
    });
  }
  public render (): HTMLDivElement {
    this._table.setAttribute('id', 'payments');
    return this._table;
  }
};
