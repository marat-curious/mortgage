import { PropertyRequiredError } from '@/errors/validation';
import parseFile from '@/parse';

let params = {};

describe('File Parsing Function', () => {
  beforeEach(() => {
    params = {
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
  });
  test('returns object with params on right JSON file', () => {
    expect.assertions(1);
    const parsed = parseFile(JSON.stringify(params));
    expect(parsed).toMatchObject(params)
  });
  test('returns syntax error', () => {
    expect.assertions(1);
    try {
      parseFile('paramsWithError');
    } catch (error) {
      expect(error).toBeInstanceOf(SyntaxError);
    }
  });
  describe('return error with description, if field:', () => {
    test('"amount" is missing', () => {
      expect.assertions(2);
      const paramsWithoutAmount = params;
      delete paramsWithoutAmount.amount;
      try {
        parseFile(JSON.stringify(paramsWithoutAmount));
      } catch (error) {
        expect(error).toBeInstanceOf(PropertyRequiredError);
        expect(error.property).toEqual('amount');
      }
    });
    test('"interest" is missing', () => {
      expect.assertions(2);
      const paramsWithoutInterest = params;
      delete paramsWithoutInterest.interest;
      try {
        parseFile(JSON.stringify(paramsWithoutInterest));
      } catch (error) {
        expect(error).toBeInstanceOf(PropertyRequiredError);
        expect(error.property).toEqual('interest');
      }
    });
    test('"term" is missing', () => {
      expect.assertions(2);
      const paramsWithoutTerm = params;
      delete paramsWithoutTerm.term;
      try {
        parseFile(JSON.stringify(paramsWithoutTerm));
      } catch (error) {
        expect(error).toBeInstanceOf(PropertyRequiredError);
        expect(error.property).toEqual('term');
      }
    });
    test('"startDate" is missing', () => {
      expect.assertions(2);
      const paramsWithoutStartDate = params;
      delete paramsWithoutStartDate.startDate;
      try {
        parseFile(JSON.stringify(paramsWithoutStartDate));
      } catch (error) {
        expect(error).toBeInstanceOf(PropertyRequiredError);
        expect(error.property).toEqual('startDate');
      }
    });
    test('"endDate" is missing', () => {
      expect.assertions(2);
      const paramsWithoutEndDate = params;
      delete paramsWithoutEndDate.endDate;
      try {
        parseFile(JSON.stringify(paramsWithoutEndDate));
      } catch (error) {
        expect(error).toBeInstanceOf(PropertyRequiredError);
        expect(error.property).toEqual('endDate');
      }
    });
  });
});
