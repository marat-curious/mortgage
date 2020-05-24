import { PropertyRequiredError } from '@/errors/validation';
import parseFile from '@/parse';

const params = {
  amount: 10000,
  interest: 0.85,
  term: 12,
  startDate: '2020-02-20',
  endDate: '2021-02-20',
  payments: [
    {
      date: '2020-03-01',
      payment: 5000,
    },
  ],
};
const paramsJsonString = JSON.stringify(params);

describe('File Parsing Function', () => {
  test('returns object with params on right JSON file', () => {
    expect.assertions(1);
    return parseFile(paramsJsonString)
      .then((data) => expect(data).toMatchObject(params));
  });
  describe('return error with description, if field:', () => {
    test('"amount" is missing', () => {
      expect.assertions(2);
      const paramsWithoutAmount = params;
      delete paramsWithoutAmount.amount;
      return parseFile(paramsWithoutAmount)
        .catch((error) => {
          expect(error).toBeInstanceOf(PropertyRequiredError);
          expect(error.property).toEqual('amoun');
        });
    });
    test('"interest" is missing', () => {
      expect.assertions(2);
      const paramsWithoutInterest = params;
      delete paramsWithoutInterest.interest;
      return parseFile(paramsWithoutInterest)
        .catch((error) => {
          expect(error).toBeInstanceOf(PropertyRequiredError);
          expect(error.property).toEqual('interest');
        });
    });
    test('"term" is missing', () => {
      expect.assertions(2);
      const paramsWithoutTerm = params;
      delete paramsWithoutTerm.term;
      return parseFile(paramsWithoutTerm)
        .catch((error) => {
          expect(error).toBeInstanceOf(PropertyRequiredError);
          expect(error.property).toEqual('term');
        });
    });
    test('"startDate" is missing', () => {
      expect.assertions(2);
      const paramsWithoutStartDate = params;
      delete paramsWithoutStartDate.startDate;
      return parseFile(paramsWithoutStartDate)
        .catch((error) => {
          expect(error).toBeInstanceOf(PropertyRequiredError);
          expect(error.property).toEqual('startDate');
        });
    });
    test('"endDate" is missing', () => {
      expect.assertions(2);
      const paramsWithoutEndDate = params;
      delete paramsWithoutEndDate.endDate;
      return parseFile(paramsWithoutEndDate)
        .catch((error) => {
          expect(error).toBeInstanceOf(PropertyRequiredError);
          expect(error.property).toEqual('endDate');
        });
    });
  });
  test('returns syntax error', () => {
    expect.assertions(1);
    const paramsWithError = {
      ...params,
      amount: 'amount',
    };
    return parseFile(paramsWithError)
      .catch((error) => {
        expect(error).toBeInstanceOf(SyntaxError);
      });
  });
});
