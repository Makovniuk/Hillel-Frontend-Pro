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

Array.prototype.heroRender = function(folrerName) {
   const tBody = [];
   this.map(function(item) {
 		tBody.push(`
		<tbody>
 			<tr>
 				<td>${item.name}</td>
 				<td><img class="img" src="images/${folrerName}/
				${item.name.replaceAll(' ', '').toLowerCase()}.svg" alt="${item.name}"></td>
 			</tr>
		</tbody>
	`);
   });

   document.write(`
   <table class="table">
	    <thead>
		   <tr>
			   <th>Name</th>
			   <th>Icon</th>
		   </tr>
	    </thead>
	    ${tBody.join('')}
	</table>  
`);
}

const renderedTableMarvelHeroes = marvelHeroes.heroRender('marvel');
const renderedTableDcHeroes = dcHeroes.heroRender('dc');

console.log(renderedTableMarvelHeroes);
console.log(renderedTableDcHeroes);
