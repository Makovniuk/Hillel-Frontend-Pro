const newArray = [
  [
    ['some text', true, [1,2,3,4, [10, 20]]],
  ],
  [
    [1, 2, 3, [100, 200]],
    ['name', 'age']
  ],
];

function deepClone(array) {
  const coppyArray = [];

  for (let i = 0; i< array.length; i++) {
    if (Array.isArray(array[i])) {
        const recursiveClone = deepClone(array[i]);
        coppyArray.push(recursiveClone);
    } else {
      coppyArray.push(array[i]);
    }
  }

  return coppyArray;
}

 console.log(deepClone(newArray));
