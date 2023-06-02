const amount = 100;
const monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
const tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',240]
];

function convertTime (array) {
  return array.map(function(item) {
    item[1] = item[1] / 60;
    return item;
  });
}

function filterTaskByHours(array) {
  return array.filter(function(item) {
    return item[1] > 2;
  });
}

function calcTaskAmount(array) {
  return array.map(function(item) {
    item.push(item[1] * amount);
    return item;
  });
}

function renderTable(array) {
  return array.map(function(item) {
    return `
      <tr>
        <td>Task name: ${item[0]}</td>
        <td>Taks duration: ${item[1]}</td>
        <td>Task amount: ${item[2]}</td>
      </tr>
    `;
  })
  .join('');
}

document.write(`
<h2>MONDAY</h2>
<table>
${convertTime(monday), filterTaskByHours(monday),
  calcTaskAmount(monday), renderTable(monday)}
</table>
<h2>TUESDAY</h2>
<table>${convertTime(tuesday), filterTaskByHours(tuesday),
  calcTaskAmount(tuesday), renderTable(tuesday)}
</table>
`);
