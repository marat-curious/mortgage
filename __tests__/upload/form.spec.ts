import Form from '@/components/form';

const params = {
  amount: 10000,
  interest: 0.85,
  term: 12,
  startDate: '2020-02-20',
  endDate: '2021-02-20',
};

describe('DOM contains form with filled fields', () => {
  beforeAll(() => {
    const form = new Form(params);
    document.body.appendChild(form.render());
  });
  test('form', () => {
    expect.assertions(1);
    const [formNode] = document.body.getElementsByTagName('form');
    expect(formNode).toBeDefined();
  });
  describe('form contains filled:', () => {
    test('"amount" field', () => {
      expect.assertions(2);
      const input = document.getElementById('amount');
      expect(input).not.toBeNull();
      expect(input.value).toBe(params.amount);
    });
    test('"interest" field', () => {
      expect.assertions(2);
      const input = document.getElementById('interest');
      expect(input).not.toBeNull();
      expect(input.value).toBe(params.interest);
    });
    test('"term" field', () => {
      expect.assertions(2);
      const input = document.getElementById('term');
      expect(input).not.toBeNull();
      expect(input.value).toBe(params.term);
    });
    test('"startDate" field', () => {
      expect.assertions(2);
      const input = document.getElementById('startDate');
      expect(input).not.toBeNull();
      expect(input.value).toBe(params.startDate);
    });
    test('"endDate" field', () => {
      expect.assertions(2);
      const input = document.getElementById('endtDate');
      expect(input).not.toBeNull();
      expect(input.value).toBe(params.endDate);
    });
  });
});
