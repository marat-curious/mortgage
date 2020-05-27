import Form from '@/components/form';

let formNode: HTMLFormElement;

describe('Form class', () => {
  beforeAll(() => {
    const form = new Form();
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
});
