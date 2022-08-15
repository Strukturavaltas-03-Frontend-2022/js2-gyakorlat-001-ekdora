import objectsMerge from '../js/01/objectsMerge';

const normalizeStr = (str) => str
  .replace(/\s+/g, '')
  .replace(/ {2,}/g, ' ')
  .replace(/> </g, '><')
  .trim();

describe('module excercises ', () => {

  test('1. feladat: objectsMerge should return a concatenated object', () => {
    const johnDoe = {
      firstName: 'John',
      lastName: 'Doe',
    };

    const janeDoe = {
      firstName: 'Jane',
      lastName: 'Doe',
    };

    const result = objectsMerge(johnDoe, janeDoe);
    const expexted = {
      0: {
        firstName: 'John',
        lastName: 'Doe',
      },
      1: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
    };

    expect(result).toEqual(expexted);
  });

});
