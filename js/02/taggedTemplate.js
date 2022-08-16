/* ## 2. feladat
- A `js/02/taggedTemplate.js` fájlban dolgozz!
- Írj egy olyan függvényt (tagged template), amely a paraméterként kapott texts, values értékeket úgy adja vissza egy string-ben, hogy 
a text értékek dőltek, a value-k félkövérek legyenek, ha beillesztjük a HTML-be, tehát a megfelelő tagekkel kiegészített string-et adjon vissza!
- Például ebből, hogy `James`, ez legyen: `<strong>James</strong>`.
- A függvény neve `taggedTemplate` legyen!
- Összefoglalva: a kapott String-eket kell HTML-elemekké (tagekké) alakítani. */

const user = {
  firstName: 'James',
  lastName: 'Smith',
  city: 'New York',
  age: '40',
};

const taggedTemplate = (texts, ...values) => {
  return texts.map((text, index) => 
  `<i>${text}</i>${values[index] ? `<strong>${values[index]}</strong>` : ''}`).join('');
}

const template = taggedTemplate`My name is ${user.firstName} ${user.lastName}, I live in ${user.city} city 
and I am ${user.age} years old.`;
document.body.innerHTML = template;

export default taggedTemplate;