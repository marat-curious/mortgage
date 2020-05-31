import {
  ValidationError,
  PropertyRequiredError,
} from '@/errors/validation';
import ErrorMessage from '@/components/error';

const error = new PropertyRequiredError('amount');
let errorMethod: (error: ValidationError) => void;

function generateErrorMessage (onError: (error: ValidationError) => void) {
  return (error: ValidationError) => onError(error);
}

describe('Error component', () => {
  beforeAll(() => {
    const error = new ErrorMessage();
    errorMethod = generateErrorMessage(error.onError);
    document.body.appendChild(error.render());
  });
  test('show error message', () => {
    expect.assertions(1);
    const errorNode = document.getElementById('error') as HTMLElement;
    errorMethod(error);
    expect(errorNode.innerText).toEqual(error.message);
  });
});
