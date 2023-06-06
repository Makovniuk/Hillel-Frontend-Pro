period = ['winter', 'summer'];
categoryList = ['vegetables', 'fruits']
vegetables = ['cabbage', 'avocado', 'tomato'];
fruits = ['grapes', 'raspberry', 'coconut'];
vegetablesPrices = [8, 30, 10];
fruitsPrices = [20, 25, 50];

do { 
    seasonBuy = prompt('What time of year do you shop: winter or summer?').toLowerCase().replaceAll(' ', '');
} while (!period.includes(seasonBuy));

seasonBuy === 'winter' ? coefficient = 2 : coefficient = 0.8;

do { 
    categoryBuy = prompt(
    'Choose category in which you want to bay products: vegetables or fruits!').toLowerCase().replaceAll(' ', '');
} while (!categoryList.includes(categoryBuy));  

switch (categoryBuy) {
    case 'vegetables':
        do {
            product = prompt(
            'Choose product from category vegetables: cabbage, avocado, tomato.').toLowerCase().replaceAll(' ', '');
            priceOfProduct = vegetablesPrices[vegetables.indexOf(product)];
        } while (!vegetables.includes(product));
        do {
            countOfProduct = parseInt(prompt(`Enter count of ${product}`));
        } while (countOfProduct < 2 || isNaN(countOfProduct));
        break;
    case 'fruits':
        do {
            product = prompt(
            'Choose product from category fruits: grapes, raspberry, coconut.').toLowerCase().replaceAll(' ', '');
            priceOfProduct = fruitsPrices[fruits.indexOf(product)];
        } while (!fruits.includes(product));
        do {
            countOfProduct = parseInt(prompt(`Enter count of ${product}`));
        } while (countOfProduct < 2 || isNaN(countOfProduct));   
        break;
} 

finalSum = countOfProduct *  priceOfProduct * coefficient;

imageProduct = `<img src="images/${categoryBuy}/${product}.svg" alt="${product}" width="100" height="100">`;

document.write(`
    <div class="product" align="center">
        ${imageProduct}
        <p>Selected product: <b>${product}</b></p>
        <p>Count of ${product}: <b>${countOfProduct}</b></p>
        <p>Selected period: <b>${seasonBuy}</b></p>
        <p>Selected category: <b>${categoryBuy}</b></p>
        <p>Final sum: <b>${finalSum} UAH</b></p>
    </div>
`);
