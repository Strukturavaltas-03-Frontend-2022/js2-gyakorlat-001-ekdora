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