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
    let JSONString = '';
    describe('amount', () => {
      beforeEach(() => {
        const paramsWithoutAmount = params;
        delete paramsWithoutAmount.amount;
        JSONString = JSON.stringify(paramsWithoutAmount);
      });
      afterEach(() => {
        JSONString = '';
      });
      test('is missing', () => {
        expect.assertions(2);
        try {
          parseFile(JSONString);
        } catch (error) {
          expect(error).toBeInstanceOf(PropertyRequiredError);
          expect(error.property).toEqual('amount');
        }
      });
      test('is another type', () => {
        expect.assertions(2);
        try {
          parseFile(JSONString);
        } catch (error) {
          expect(error).toBeInstanceOf(TypeError);
          expect(error.property).toEqual('amount');
        }
      });
    });
    describe('interest', () => {
      beforeEach(() => {
        const paramsWithoutInterest = params;
        delete paramsWithoutInterest.interest;
        JSONString = JSON.stringify(paramsWithoutInterest);
      });
      afterEach(() => {
        JSONString = '';
      });
      test('is missing', () => {
        expect.assertions(2);
        try {
          parseFile(JSONString);
        } catch (error) {
          expect(error).toBeInstanceOf(PropertyRequiredError);
          expect(error.property).toEqual('interest');
        }
      });
      test('is another type', () => {
        expect.assertions(2);
        try {
          parseFile(JSONString);
        } catch (error) {
          expect(error).toBeInstanceOf(TypeError);
          expect(error.property).toEqual('interest');
        }
      });
    });
    describe('term', () => {
      beforeEach(() => {
        const paramsWithoutTerm = params;
        delete paramsWithoutTerm.term;
        JSONString = JSON.stringify(paramsWithoutTerm);
      });
      afterEach(() => {
        JSONString = '';
      });
      test('is missing', () => {
        expect.assertions(2);
        try {
          parseFile(JSONString);
        } catch (error) {
          expect(error).toBeInstanceOf(PropertyRequiredError);
          expect(error.property).toEqual('term');
        }
      });
      test('is another type', () => {
        expect.assertions(2);
        try {
          parseFile(JSONString);
        } catch (error) {
          expect(error).toBeInstanceOf(TypeError);
          expect(error.property).toEqual('term');
        }
      });
    });
    describe('startDate', () => {
      beforeEach(() => {
        const paramsWithoutStartDate = params;
        delete paramsWithoutStartDate.startDate;
        JSONString = JSON.stringify(paramsWithoutStartDate);
      });
      afterEach(() => {
        JSONString = '';
      });
      test('is missing', () => {
        expect.assertions(2);
        try {
          parseFile(JSONString);
        } catch (error) {
          expect(error).toBeInstanceOf(PropertyRequiredError);
          expect(error.property).toEqual('startDate');
        }
      });
      test('is another type', () => {
        expect.assertions(2);
        try {
          parseFile(JSONString);
        } catch (error) {
          expect(error).toBeInstanceOf(TypeError);
          expect(error.property).toEqual('startDate');
        }
      });
    });
    describe('endDate', () => {
      beforeEach(() => {
        const paramsWithoutEndDate = params;
        delete paramsWithoutEndDate.endDate;
        JSONString = JSON.stringify(paramsWithoutEndDate);
      });
      afterEach(() => {
        JSONString = '';
      });
      test('is missing', () => {
        expect.assertions(2);
        try {
          parseFile(JSONString);
        } catch (error) {
          expect(error).toBeInstanceOf(PropertyRequiredError);
          expect(error.property).toEqual('endDate');
        }
      });
      test('is another type', () => {
        expect.assertions(2);
        try {
          parseFile(JSONString);
        } catch (error) {
          expect(error).toBeInstanceOf(TypeError);
          expect(error.property).toEqual('endDate');
        }
      });
    });
  });
});
