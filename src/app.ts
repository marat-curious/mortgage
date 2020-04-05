type Parsed = {
  amount: number,
  interest: number,
  termMonths: number,
  startDate: string,
  endDate: string,
  payments: [{
    date: string,
    payment: number;
  }],
}

function handleFileLoad(e: Event) {
  const { result } = e.target as FileReader;

  if (result) {
    const resultParsed: Parsed = JSON.parse(result as string);
    console.log(resultParsed);
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

input.setAttribute('type', 'file');
input.addEventListener('change', handleFileSelect, false);

app.appendChild(input);

document.body.appendChild(app);
