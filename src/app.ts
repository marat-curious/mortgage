import ErrorMessage from './components/error';
import Form from './components/form';
import Upload from './components/upload';
import { Params } from './parse';

const app = document.createElement('div') as HTMLDivElement;

function fillForm(form: Form) {
  return (data?: Params) => {
    form.fill(data);
  };
};

function showErrorMessage(errorMessage: ErrorMessage) {
  return (error: Error) => {
    errorMessage.show(error);
  };
};

const error = new ErrorMessage();
const form = new Form();
const input = new Upload();

input.onChange = fillForm(form);
input.onError = showErrorMessage(error);

app.appendChild(error.render());
app.appendChild(input.render());
app.appendChild(form.render());

document.body.appendChild(app);
