names = ["Test User",
  "Test User2",
  "Harriette Guerrero",
  "Izabella Squires",
  "Isla Sheppard",
  "Umaiza Head",
  "Zackery Hopkins",
  "Nabeel Valencia",
  "Tom Wormald"
];

exports.getTestEmail = function () {
  return "test@test.com";
}

exports.getNameById = function (id) {
  return names[id];
}

exports.getRandomUserId = function () {
  return Math.floor(Math.random() * this.getNamesCount()).toString();
}

exports.getRandomAppId = function () {
  return makeId(8);
}

exports.getRandomId = function () {
  return makeId(20);
}

exports.getAppName = function () {
  return "Test App Name";
}

exports.getNamesCount = function () {
  return names.length;
}

exports.getPseudonym = function () {
  return "Test Pseudonym!";
}

exports.error = function (error) {
  return {
    type: "error.list",
    request_id: makeId(20),
    errors: [
      error
    ]
  };
}

function makeId(length) {
  let result = [];
  let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('');
}