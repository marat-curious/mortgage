import Error from './components/error';
import Form from './components/form';
import Upload from './components/upload';
import { Params } from './parse';

const app = document.createElement('div') as HTMLDivElement;

function fillForm(form: Form) {
  return (data?: Params) => {
    form.fill(data);
  };
};

const error = new Error();
const form = new Form();
const input = new Upload();
input.onChange = fillForm(form);

app.appendChild(error.render());
app.appendChild(input.render());
app.appendChild(form.render());

document.body.appendChild(app);
