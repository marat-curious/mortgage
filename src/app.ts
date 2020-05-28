import parseFile from './parse';
import Form from './components/form'

function handleFileLoad(e: Event) {
  const { result } = e.target as FileReader;

  if (result) {
    const data = typeof result === 'string'
      ? result
      : Buffer.from(result).toString();
    try {
      const resultParsed = parseFile(data);
      console.log(resultParsed);
    } catch (error) {
      console.error(error);
    }
  }
}

function handleFileSelect(e: Event) {
  const { files } = e.target as HTMLInputElement;

  if (!files || !files[0]) {
    return;
  }

  const reader: FileReader = new FileReader();

  reader.onload = handleFileLoad;
  reader.readAsText(files[0]);
}

const app = document.createElement('div') as HTMLDivElement;
const input = document.createElement('input') as HTMLInputElement;

const form = new Form().render();

input.setAttribute('type', 'file');
input.addEventListener('change', handleFileSelect, false);

app.appendChild(form);
app.appendChild(input);

document.body.appendChild(app);
