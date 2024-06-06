const user = { name: "kiran", children: [] };

// Iterate over the properties of the user object using for...in loop
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// Iterate over the keys of the user object using Object.keys
Object.keys(user).forEach((key) => {
  console.log(`${key}: ${user[key]}`);
});

// Iterate over the values of the user object using Object.values
Object.values(user).forEach((value) => {
  console.log(value);
});

// Iterate over the entries (key-value pairs) of the user object using Object.entries
Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
