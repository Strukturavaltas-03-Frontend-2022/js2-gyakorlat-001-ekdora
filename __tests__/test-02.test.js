import taggedTemplate from '../js/02/taggedTemplate';

const normalizeStr = (str) => str
  .replace(/\s+/g, '')
  .replace(/ {2,}/g, ' ')
  .replace(/> </g, '><')
  .trim();

describe('module excercises ', () => {

  test('2. feladat: taggedTemplate should be an HTML template.', () => {
    const user = {
      firstName: 'James',
      lastName: 'Bond',
      age: '30',
      nationality: 'American',
    };

    let result = taggedTemplate`My name is ${user.firstName} ${user.lastName}, and I'm ${user.age} years old. I'm ${user.nationality}.`;
    result = normalizeStr(result);
    const expected = normalizeStr(`
    <em>My name is </em><strong>James</strong> <strong>Bond</strong>
    <em>, and I'm </em> <strong>30</strong>
    <em> years old. I'm </em><strong>American</strong>
    <em>.</em>`);

    expect(result).toEqual(expected);
  });

});
