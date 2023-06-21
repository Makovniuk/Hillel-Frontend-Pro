const kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

const devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

const cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

const categoryProducts = {
	kitchen: kitchenProducts,
	cosmetics: cosmeticsProducts,
	devices: devicesProducts,
};

function Product(type, price) {
  this.type = type;
  this.price = price;

  this.renderProduct = function(category) {
    return`
      <tr>
	      <td><img class="img" src="images/${category}/${this.type}.svg" alt="${this.type}"></td>
	      <td>${this.type}</td>
	      <td>${Array.isArray(this.price) === true ? this.price.join(' - ') : this.price} USD</td>
      </tr>
    `;
  };
}

const totalArrayProducts = [];

for (let key in categoryProducts) {
    categoryProducts[key]	
    .map(function (item) {
    return new Product( item.type, item.price);
    })
    .forEach(function (item) {
    totalArrayProducts.push(item.renderProduct(key));	
    });
};

document.write(`
  <table class="table">
	 <thead>
		<tr>
	    <th>Image</th>
		   <th>Name</th>
		   <th>Price</th>
		</tr>
	 </thead>
	 <tbody>
	    ${totalArrayProducts.join('')}
	 </tbody>
   </table>  
`);
