const parse = (data) => JSON.parse(data);

function requestData(method, URL, cb) {
  const xml = new XMLHttpRequest();
  xml.open(method, URL);
  xml.send();
  xml.addEventListener('readystatechange', () => {
    if (xml.readyState === 4 && xml.status < 400) {
      const response = parse(xml.response);
      cb(response);
    };
  });  
};

const arrayUsers = [];

function addToArray(response) {
  response.users.forEach(item => {
    arrayUsers.push(item)
  });

};

requestData('GET', 'request/data.json', addToArray);
requestData('GET', 'request/data2.json', addToArray);

console.log(arrayUsers);
