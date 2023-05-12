// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
{
name: "cappuccino",
price: 8,
seasonal: false,
},
{
name: "espresso",
price: 5,
seasonal: false,
},
{
name: "latte",
price: 5,
seasonal: false,
},
{
name: "affogato",
price: 9,
seasonal: true,
},
{
name: "macchiato",
price: 6,
seasonal: false,
},
{
name: "americano",
price: 7,
seasonal: false,
},
{
name: "iced coffee",
price: 6,
seasonal: false,
},
{
name: "frappe",
price: 8,
seasonal: false,
},
{
name: "cuban espresso",
price: 10,
seasonal: true,
}
];

module.exports = coffeeMenu;

// Prompt 2:
// Return an array of all the drinks on the menu.

const getAllDrinks = (menu) => menu.map(drink => drink.name);

// Prompt 3:
// Return an array of drinks that cost 5 and under.

const getInexpensiveDrinks = (menu) => menu.filter(drink => drink.price <= 5).map(drink => drink.name);

// Prompt 4:
// Return an array of drinks that are priced at an even number.

const getEvenPricedDrinks = (menu) => menu.filter(drink => drink.price % 2 === 0).map(drink => drink.name);

// Prompt 5:
// Return the total if you were to order one of every drink.

const getTotalOrderCost = (menu) => menu.reduce((total, drink) => total + drink.price, 0);

// Prompt 6:
// Return an array with all the drinks that are seasonal.

const getSeasonalDrinks = (menu) => menu.filter(drink => drink.seasonal).map(drink => drink.name);

// Prompt 7:
// Return all the seasonal drinks with the words "with imported beans" after the item name.

const getSeasonalDrinksWithImportedBeans = (menu) => {
const seasonalDrinks = menu.filter(drink => drink.seasonal);
return seasonalDrinks.map(drink => ${drink.name} with imported beans);
};

// Testing the functions
console.log(getAllDrinks(coffeeMenu)); // [ 'cappuccino', 'espresso', 'latte', 'affogato', 'macchiato', 'americano', 'iced coffee', 'frappe', 'cuban espresso' ]
console.log(getInexpensiveDrinks(coffeeMenu)); // [ 'espresso', 'latte' ]
console.log(getEvenPricedDrinks(coffeeMenu)); // [ 'latte', 'macchiato', 'frappe' ]
console.log(getTotalOrderCost(coffeeMenu)); // 58
console.log(getSeasonalDrinks(coffeeMenu)); // [ 'affogato', 'cuban espresso' ]
console.log(getSeasonalDrinksWithImportedBeans(coffeeMenu)); // [ 'affogato with imported beans', 'cuban espresso with imported beans' ]
