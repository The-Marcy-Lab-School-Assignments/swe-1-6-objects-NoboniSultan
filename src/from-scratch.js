const coolGreeting = (person) => {
  if (person.isCool) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`;
  } else {
    return `Greetings ${person.name}, how have you been lately?`;
  }
};
const person = {
  name: 'Sara',
  bio: 'Too cool 4 skool.',
  age: 32,
  isCool: true
};

console.log(coolGreeting(person));


const haveBirthday = (person) => {
  person.age = person.age + 1;
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;

  person.spyHandle = spyHandle;
};
becomeSecretAgent(person, 'Shadow');
console.log(person);

const carMaker = (name, maker, year) => ({
  name,
  maker,
  year,
  needsOilChange: false
});

console.log(carMaker('Civic', 'Honda', 2010));

const weAreNotFriends = (person) => {
  if (!person || !Array.isArray(person.friends)) {
    return undefined;
  }
  return person.friends.pop();
};

const removed = weAreNotFriends(person);
console.log(removed);
console.log(person.friends);


const listHobbies = (person) => {
  for (let hobby of person.hobbies) {
    console.log(`${person.name} likes ${hobby}.`)
  }
};
const jo = {
  name: 'Jo',
  age: 34,
  hobbies: ['running', 'biking', 'baking'],
};

console.log(listHobbies(jo));

const getNextOpponent = (team) => {
  if (!team.matches || team.matches.length === 0) {
    return null;
  }
  return team.matches[0].teamName
};

const fighters = {
  name: 'Fighters',
  sport: 'basketball',
  wins: 3,
  location: {
    city: 'Bridgeport',
    state: 'CT',
  },
  matches: [
    {
      teamName: 'Dunkaroos',
      skill: 9,
      wins: 12,
    },
    {
      teamName: 'Space Jammers',
      skill: 10,
      wins: 16,
    },
    {
      teamName: 'Mustangs',
      skill: 6,
      wins: 10,
    },
  ]
}

console.log(getNextOpponent(fighters));

const listAllKeys = (obj) => {
  return Object.keys(obj);
};
const car = {
  name: 'Civic',
  maker: 'Honda',
  year: 2010
};

console.log(listAllKeys(car));

const listAllValues = (obj) => {
  return Object.values(obj);
};

const convertToMatrix = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const keys = Object.keys(arr[0]);
  const matrix = [keys];
  for (const obj of arr) {
    matrix.push(keys.map(k => obj[k]));
  }
  return matrix;
};
const users = [
  { name: 'Sara', age: 30, bio: 'What a legend' },
  { name: 'Bob', age: 30, bio: "Kind of mean if we're being honest" }
];

console.log(convertToMatrix(users));


module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
