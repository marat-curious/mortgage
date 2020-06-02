import Table from '@/components/table';

const params = {
  amount: 10000,
  interest: 0.85,
  term: 12,
  startDate: '2020-02-20',
  endDate: '2021-02-20',
  payments: [
    {
      date: '2020-03-01',
      payment: 5000,
    },
    {
      date: '2020-04-01',
      payment: 10000,
    },
  ]
};

describe('Table component', () => {
  let node: HTMLElement | null;
  let rows: HTMLCollectionOf<Element>;
  beforeAll(() => {
    const table = new Table();
    table.fill(params);
    document.body.appendChild(table.render());
    node = document.getElementById('payments');
    if (node) {
      rows = node.getElementsByClassName('payment');
    }
  });
  test('exists', () => {
    expect.assertions(1);
    expect(node).toBeDefined();
  });
  test('rows count equal data length', () => {
    expect.assertions(1);
    expect(rows.length).toEqual(params.payments.length);
  });
  test('cells contains correct data', () => {
    expect.assertions(6);
    const { payments } = params;
    [...rows].forEach((row, index) => {
      const cells = row.getElementsByTagName('span');
      expect(cells.length).toEqual(2);
      expect(cells[0].innerText).toEqual(payments[index].date);
      expect(cells[1].innerText).toEqual(payments[index].payment.toString());
    });
  });
});
