import Table from '@/components/table';

let tableNode;
let tableRows;
const payments = [
  {
    date: '2020-03-01',
    payment: 5000,
  },
  {
    date: '2020-04-01',
    payment: 10000,
  },
];

describe('DOM contains table with filled cells', () => {
  beforeAll(() => {
    const table = new Table(payments);
    document.body.appendChild(table.render());
    tableNode = document.body.getElementsByTagName('table')[0];
    tableRows = tableNode.getElementsByTagName('tr');
  });
  test('table', () => {
    expect.assertions(1);
    expect(tableNode).toBeDefined();
  });
  test('rows count equal data length', () => {
    expect.assertions(1);
    expect(tableRows.length).toEqual(payments.length);
  });
  test('cells contains correct data', () => {
    expect.assertions(tableRows * 3);
    [...tableRows].forEach((row) => {
      const cells = row.getElementsByTagName('span');
      expect(cells.length).toEqual(2);
      expect(cells[0].innerText).toEqual(payments[0].date);
      expect(cells[1].innerText).toEqual(payments[1].payment);
    });
  });
});
