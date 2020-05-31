export default class ErrorMessage {
  error: HTMLDivElement;
  constructor () {
    this.error = document.createElement('div');
    this.show = this.show.bind(this);
  }
  show (error: Error) {
    this.error.innerText = error.message;
  }
  render () {
    this.error.setAttribute('id', 'error');
    this.error.classList.add('error');
    return this.error;
  }
};
