import Form from '@/components/form';

describe('Form class', () => {
  let formNode: HTMLFormElement;
  const form = new Form();
  beforeAll(() => {
    document.body.appendChild(form.render());
    formNode = document.getElementsByTagName('form')[0];
  });
  test('builds form node', () => {
    expect.assertions(1);
    expect(formNode).not.toBeNull();
  });
  describe('with', () => {
    test('"amount" input', () => {
      expect.assertions(1);
      const input = document.getElementById('amount');
      expect(input).not.toBeNull();
    });
    test('"interest" input', () => {
      expect.assertions(1);
      const input = document.getElementById('interest');
      expect(input).not.toBeNull();
    });
    test('"term" input', () => {
      expect.assertions(1);
      const input = document.getElementById('term');
      expect(input).not.toBeNull();
    });
    test('"startDate" input', () => {
      expect.assertions(1);
      const input = document.getElementById('startDate');
      expect(input).not.toBeNull();
    });
    test('"endDate" input', () => {
      expect.assertions(1);
      const input = document.getElementById('endDate');
      expect(input).not.toBeNull();
    });
  });
  describe('sets value attribute for', () => {
    const params = {
      amount: 10000,
      interest: 0.85,
      term: 12,
      startDate: '2020-02-20',
      endDate: '2021-02-20',
    };
    beforeAll(() => {
      form.fill(params);
    });
    test('"amount" field', () => {
      expect.assertions(2);
      const input = document.getElementById('amount') as HTMLInputElement;
      expect(input).not.toBeNull();
      expect(input?.value).toBe(String(params.amount));
    });
    test('"interest" field', () => {
      expect.assertions(2);
      const input = document.getElementById('interest') as HTMLInputElement;
      expect(input).not.toBeNull();
      expect(input?.value).toBe(String(params.interest));
    });
    test('"term" field', () => {
      expect.assertions(2);
      const input = document.getElementById('term') as HTMLInputElement;
      expect(input).not.toBeNull();
      expect(input?.value).toBe(String(params.term));
    });
    test('"startDate" field', () => {
      expect.assertions(2);
      const input = document.getElementById('startDate') as HTMLInputElement;
      expect(input).not.toBeNull();
      expect(input?.value).toBe(params.startDate);
    });
    test('"endDate" field', () => {
      expect.assertions(2);
      const input = document.getElementById('endDate') as HTMLInputElement;
      expect(input).not.toBeNull();
      expect(input?.value).toBe(params.endDate);
    });
  });
});
