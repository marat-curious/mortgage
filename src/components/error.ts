import { ValidationError } from '@/errors/validation';

export default class ErrorMessage {
  public onError: (error: ValidationError) => void = () => {};
  constructor () {
    this.onError = this.onError.bind(this);
  }
  render () {
    const error = document.createElement('div');
    error.classList.add('error');
    return error;
  }
};
