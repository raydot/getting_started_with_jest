const filterByTerm = require('../src/filterByTerm');

describe('Filter function', () => {
  // test stuff
  test('it should filter by a search term (link)', () => {
    // actual test
    // testing is a matter of inputs, functions, and expected outputs.abs
    const input = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' },
    ];

    // Define the expected result
    const output = [{ id: 3, url: 'https://www.link3.dev' }];
    const output2 = [{ id: 2, url: 'https://www.url2.dev' }];
    // In a jest test you should wrap the function call inside expect
    // coupled with a matcher
    expect(filterByTerm(input, 'link')).toEqual(output);
    expect(filterByTerm(input, 'LINK')).toEqual(output);
    expect(filterByTerm(input, 'url2')).toEqual(output2);
    expect(filterByTerm(input)).toThrowError('searchTerm cannot be empty');
  });
});

// For the demo the function is going right here.  This would
// obviously not be the case with a real test.
/* This has been exported to filterByTerm.js

function filterByTerm(inputArr, searchTerm) {
  // adjustment to deal with the upper case case
  const regex = new RegExp(searchTerm, 'i');
  return inputArr.filter(function (arrayElement) {
    // return arrayElement.url.match(searchTerm);
    return arrayElement.url.match(regex);
  });
} */
