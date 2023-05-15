//---------------Price from category vegetables---------------//
cabbage = 8;
avocado = 30;
tomato = 10;

//----------------Price from category fruits-------------------//
grapes = 20;
raspberry = 25;
coconut = 50;

//----------------------Questions for user----------------------//
do { 
    seasonBuy = prompt(
    'What time of year do you shop: winter or summer?')
    .toLowerCase().replaceAll(' ', '');
} while (seasonBuy !== 'winter' && seasonBuy !== 'summer');

do { 
    categoryBuy = prompt(
    'Choose category in which you want to bay products: vegetables or fruits!')
    .toLowerCase().replaceAll(' ', '');
} while (categoryBuy !== 'vegetables' && categoryBuy !== 'fruits');  

switch (categoryBuy) {
    case 'vegetables':
        do {
            productOfVegetables = prompt(
            'Choose product from category vegetables: cabbage, avocado, tomato.')
            .toLowerCase().replaceAll(' ', '');
        } while (productOfVegetables !== 'cabbage' && productOfVegetables !== 'avocado' 
            && productOfVegetables !== 'tomato');
        do {
            countOfProduct = parseInt(prompt(`Enter count of ${productOfVegetables}`));
        } while (countOfProduct < 2 || isNaN(countOfProduct));
        break;
    case 'fruits':
        do {
            productOfFruits = prompt(
            'Choose product from category fruits: grapes, raspberry, coconut.')
            .toLowerCase().replaceAll(' ', '');
        } while (productOfFruits !== 'grapes' && productOfFruits !== 'raspberry' 
           && productOfFruits !== 'coconut');
        do {
            countOfProduct = parseInt(prompt(`Enter count of ${productOfFruits}`));
        } while (countOfProduct < 2 || isNaN(countOfProduct));   
        break;
} 

//----------------------------Switch and case for productOfVegetables------------------------//
if (categoryBuy === 'vegetables') {
switch (productOfVegetables) {
    case 'cabbage':
        document.write(`
            <div class="product" align="center">
              <img src="images/vegetables/cabbage.svg" alt="cabbage" width="100" height="100">
              <p>Selected product: <b>${productOfVegetables}</b></p>
              <p>Count of ${productOfVegetables}: <b>${countOfProduct}</b></p>
              <p>Selected period: <b>${seasonBuy}</b></p>
              <p>Selected category: <b>${categoryBuy}</b></p>
              <p>Final sum: <b>${seasonBuy === 'winter'
              ? cabbage * 2 * countOfProduct 
              : cabbage * 0.8 * countOfProduct} UAH</b></p>
            </div>
        `);
        break;
    case 'avocado':
        document.write(`
            <div class="product" align="center">
              <img src="images/vegetables/avocado.svg" alt="avocado" width="100" height="100">
              <p>Selected product: <b>${productOfVegetables}</b></p>
              <p>Count of ${productOfVegetables}: <b>${countOfProduct}</b></p>
              <p>Selected period: <b>${seasonBuy}</b></p>
              <p>Selected category: <b>${categoryBuy}</b></p>
              <p>Final sum: <b>${seasonBuy === 'winter'
              ? avocado * 2 * countOfProduct 
              : avocado * 0.8 * countOfProduct} UAH</b></p>
            </div>
        `);
         break;
    case 'tomato':
        document.write(`
            <div class="product" align="center">
              <img src="images/vegetables/tomato.svg" alt="tomato" width="100" height="100">
              <p>Selected product: <b>${productOfVegetables}</b></p>
              <p>Count of ${productOfVegetables}: <b>${countOfProduct}</b></p>
              <p>Selected period: <b>${seasonBuy}</b></p>
              <p>Selected category: <b>${categoryBuy}</b></p>
              <p>Final sum: <b>${seasonBuy === 'winter'
              ? tomato * 2 * countOfProduct 
              : tomato * 0.8 * countOfProduct} UAH</b></p>
            </div>
       `);
        break;
}  
}  

//-------------------------------Switch and case for productOfFruits-------------------------//
else {
switch (productOfFruits) {
    case 'coconut':
        document.write(`
            <div class="product" align="center">
              <img src="images/fruits/coconut.svg" alt="coconut" width="100" height="100">
              <p>Selected product: <b>${productOfFruits}</b></p>
              <p>Count of ${productOfFruits}: <b>${countOfProduct}</b></p>
              <p>Selected period: <b>${seasonBuy}</b></p>
              <p>Selected category: <b>${categoryBuy}</b></p>
              <p>Final sum: <b>${seasonBuy === 'winter'
              ? coconut  * 2 * countOfProduct 
              : coconut  * 0.8 * countOfProduct} UAH</b></p>
            </div>
         `);
         break;
    case 'grapes':
        document.write(`
            <div class="product" align="center">
              <img src="images/fruits/grapes.svg" alt="grapes" width="100" height="100">
              <p>Selected product: <b>${productOfFruits}</b></p>
              <p>Count of ${productOfFruits}: <b>${countOfProduct}</b></p>
              <p>Selected period: <b>${seasonBuy}</b></p>
              <p>Selected category: <b>${categoryBuy}</b></p>
              <p>Final sum: <b>${seasonBuy === 'winter'
              ? grapes * 2 * countOfProduct 
              : grapes * 0.8 * countOfProduct} UAH</b></p>
            </div>
         `);
         break;
    case 'raspberry':
        document.write(`
            <div class="product" align="center">
              <img src="images/fruits/raspberry.svg" alt="raspberry" width="100" height="100">
              <p>Selected product: <b>${productOfFruits}</b></p>
              <p>Count of ${productOfFruits}: <b>${countOfProduct}</b></p>
              <p>Selected period: <b>${seasonBuy}</b></p>
              <p>Selected category: <b>${categoryBuy}</b></p>
              <p>Final sum: <b>${seasonBuy === 'winter'
              ? raspberry * 2 * countOfProduct 
              : raspberry * 0.8 * countOfProduct} UAH</b></p>
            </div>
        `);
        break;
}
}
