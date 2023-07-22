const tableWrapper = document.querySelector('.grid-wrapper');

for (let i = 1; i < 101; i++) {
  const TableCell = document.createElement('div');
  const numberDiv = document.createElement('div');

  TableCell.classList.add('grid');
  numberDiv.innerText = i;
  numberDiv.classList.add('number-div');
  
  TableCell.append(numberDiv);
  tableWrapper.append(TableCell);
};