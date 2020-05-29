import Form from './components/form';
import Upload from './components/upload';
import { Params } from './parse';

const app = document.createElement('div') as HTMLDivElement;

function logData (data?: Params) {
  console.log(data);
}

const form = new Form().render();
const input = new Upload();
input.onChange = logData;

app.appendChild(input.render());
app.appendChild(form);

document.body.appendChild(app);
