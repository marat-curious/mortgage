import pFile from '@/parse';
console.log(pFile);

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
    const [error, result] = pFile(paramsJsonString);
    expect(error).toBeUndefined();
    expect(result).toMatchObject(params);
  });
});
