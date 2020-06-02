import ErrorMessage from './components/error';
import Form from './components/form';
import Upload from './components/upload';
import Table from './components/Table';
import { Params } from './parse';

const app = document.createElement('div') as HTMLDivElement;

function fill(form: Form, table: Table) {
  return (data?: Params) => {
    form.fill(data);
    table.fill(data);
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
const table = new Table();

input.onChange = fill(form, table);
input.onError = showErrorMessage(error);

app.appendChild(error.render());
app.appendChild(input.render());
app.appendChild(form.render());
app.appendChild(table.render());

document.body.appendChild(app);
