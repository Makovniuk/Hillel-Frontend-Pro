let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroRender =  function(folrerName) {
   return this.map(function(item) {
	debugger
	item['age'] = '25';
	return item
   })

}

console.log(dcHeroes.heroRender())






// `
// <tr>
// 	<td>Thor</td>
// 	<td>
// 		<img src="images/marvel/thor.svg">
// 	</td>
// </tr>

// <table>
// 		<thead>
// 			<tr>
// 				<th>Name</th>
// 				<th>Icon</th>
// 			</tr>
// 		</thead>
// 		<tbody>
// 			<tr>
// 				<td>Thor</td>
// 				<td>
// 					<img src="images/marvel/thor.svg">
// 				</td>
// 			</tr><tr>
// 				<td>Spider Man</td>
// 				<td>
// 					<img src="images/marvel/spiderman.svg">
// 				</td>
// 			</tr>
// 		</tbody>
// 	</table>`