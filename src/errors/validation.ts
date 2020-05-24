export class ValidationError extends Error {
  property: string;
  constructor(property: string, message: string) {
    super(message);
    this.name = 'ValidationError';
    this.property = property;
  }
}

export class PropertyRequiredError extends ValidationError {
  constructor(property: string) {
    super(property, `Отсутствует свойство: ${property}`);
    this.name = 'PropertyRequiredError';
  }
}

export class PropertyTypeError extends ValidationError {
  constructor(property: string) {
    super(property, `Неверный тип свойства: ${property}`);
    this.name = 'PropertyTypeError';
  }
}

export class PropertyFormatError extends ValidationError {
  constructor(property: string) {
    super(property, `Неверный формат свойства: ${property}`);
    this.name = 'PropertyFormatError';
  }
}
