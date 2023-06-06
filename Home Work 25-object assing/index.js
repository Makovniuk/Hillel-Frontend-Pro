const myObject = {x: 10, y: 20, inner: {x: 20, z: 30}, foo2: {k: 23, p: 13}, f:30, a:100, foo1: {l:50, y:75}};

function convertObject(object) {
  const newObject = {};

  for (let key in object) {
    debugger
    if (typeof object[key] === 'object') {
      const recursiveConverter = convertObject(object[key]);
      Object.assign(newObject, recursiveConverter);
    } else {
      newObject[key] = object[key];
    }
  }
  
  return  newObject;
}

const convertedObject = convertObject(myObject);
console.log(convertedObject);
