const addTen = require('./jestTest');
test ('return number plus ten' ,() => {
  expect(addTen(5)).toBe(15);

})