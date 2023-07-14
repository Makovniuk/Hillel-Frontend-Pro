const divConteinerForm = document.querySelector('#container-form');
const fullNameInput = document.querySelector('#fullName');
const birthDate = document.querySelector('#birthDate')
const gender = document.querySelectorAll('.gender');
const city = document.querySelector('#city');
const address = document.querySelector('#address');
const languages = document.querySelectorAll('.languages');
const buttonSave = document.querySelector('#saveForm');

const languagesArray =[];
const genderArray = [];

const infoObject = function getObjectfromInput() {
  gender.forEach(item => {
    if (item.checked) {
      genderArray.push(item.value)
    };
  });

  languages.forEach(item => {
    if (item.checked) {
      languagesArray.push(item.value)
    };
  });

  const userData = {
    [fullNameInput.name]: fullNameInput.value,
    [birthDate.name]: birthDate.value,
    Gender: genderArray.join(''),
    [address.name]: address.value,
    [city.name]: city.value,
    Languages: languagesArray,
  };

  return userData;
};

function renderTable(object) {
  const table = document.createElement('table');
  const divTable = document.querySelector('.table-info');
  const rowHead = document.createElement('tr');
  rowHead.innerHTML = `<td colspan="2">USER INFO</td>`;
  divTable.appendChild(table);
  table.appendChild(rowHead);

  for(key in object) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${key}</td><td>${object[key]}</td>`;
    table.append(row);
  };
};

buttonSave.addEventListener('click', (e) => {
  infoObject();

  renderTable(infoObject());

  divConteinerForm.innerHTML = '';
});
