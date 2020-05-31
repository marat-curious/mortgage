import { PropertyRequiredError } from '@/errors/validation';
import ErrorMessage from '@/components/error';

const error = new ErrorMessage();

describe('Error component', () => {
  beforeAll(() => {
    document.body.appendChild(error.render());
  });
  test('show error message', () => {
    expect.assertions(1);
    const errorRequiredProperty = new PropertyRequiredError('amount');
    const errorNode = document.getElementById('error') as HTMLElement;
    error.show(errorRequiredProperty);
    expect(errorNode.innerText).toEqual(errorRequiredProperty.message);
  });
});
