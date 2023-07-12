const  newArray = [1,2,[7,4,5],8,[4,20,7,[4,6,50,9,0,[4,6]],9,4],6,15];

function generateList(array) {
    const ul = document.createElement('ul');
    array.forEach(item => {
      const li = document.createElement('li');
      !Array.isArray(item) 
      ? li.innerText = item
      : li.appendChild(generateList(item, ul)); 
      ul.appendChild(li);
    });

    return ul;
};

document.body.appendChild(generateList(newArray));
