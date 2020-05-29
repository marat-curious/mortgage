import parseFile, { Params } from '../parse';

class Input {
  type: string;
  constructor(type = 'text') {
    this.type = type;
  }
};

export default class FileInput extends Input {
  public onChange: (data?: Params) => void = () => {};
  constructor() {
    super('file');
    this.handleSelectFile = this.handleSelectFile.bind(this);
    this.handleLoadFile = this.handleLoadFile.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  handleLoadFile(e: Event) {
    const { result } = e.target as FileReader;
    if (!result) {
      return;
    }
    const data = typeof result === 'string'
      ? result
      : Buffer.from(result).toString();
    try {
      const resultParsed = parseFile(data);
      this.onChange(resultParsed);
    } catch (error) {
      console.error(error);
    }
  }
  handleSelectFile(e: Event) {
    const { files } = e.target as HTMLInputElement;
    if (!files || !files[0]) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.onload = this.handleLoadFile;
    reader.readAsText(files[0]);
  }
  render () {
    const input = document.createElement('input') as HTMLInputElement;
    input.setAttribute('type', this.type);
    input.setAttribute('id', 'file');
    input.setAttribute('name', 'file');
    input.addEventListener('change', this.handleSelectFile, false);
    return input;
  }
};
