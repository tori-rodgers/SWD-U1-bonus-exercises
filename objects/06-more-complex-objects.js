/**** MORE COMPLEX OBJECTS ****/

/*
    In the real world, data is often more complex with multiple levels 
    of nested data structures. Let's take a step in that direction.
*/

let groceryOrderByDepartment = {
	produce: [
		{
			SKU: '20196',
			name: 'Butter Lettuce',
			package: 'bag',
			quantities: [6, 12],
			unit: 'oz.',
			costPerUnit: 0.45,
		},
		{
			SKU: '32450',
			name: 'Green Bell Pepper',
			package: 'item',
			quantities: [1],
			unit: 'each',
			costPerUnit: 0.78,
		},
		{
			SKU: '33491',
			name: 'Whole Carrots',
			package: 'bag',
			quantities: [1, 3, 5],
			unit: 'lb.',
			costPerUnit: 0.07 * 16,
		},
	],
	dairy: [
		{
			SKU: '23956',
			name: 'Peach Greek Yogurt',
			package: 'pack',
			quantities: [1, 4],
			unit: 'each',
			costPerUnit: 1.18,
		},
		{
			SKU: '85344',
			name: 'Unsweetened Almond Milk',
			package: 'carton',
			quantities: [32, 64],
			unit: 'oz.',
			costPerUnit: 0.05,
		},
	],
	meats: [
		{
			SKU: '92543',
			name: 'Lean Ground Beef',
			package: 'package',
			quantities: [1, 2],
			unit: 'lb.',
			costPerUnit: 0.45 * 16,
		},
		{
			SKU: '19534',
			name: 'Boneless Skinless Chicken',
			package: 'package',
			quantities: [1, 2.5],
			unit: 'lb.',
			costPerUnit: 4.15,
		},
	],
};

// EXAMPLE: Find the correct reference and print "23956" to the console.
console.log(groceryOrderByDepartment.dairy[0].SKU);

// EXAMPLE: Find the correct reference and print "Whole Carrots" to the console.
console.log(groceryOrderByDepartment.produce[2].name);

// TODO: Find the correct reference and print "Boneless Skinless Chicken" to the console.


// TODO: Find the correct reference and print "85344" to the console.


// EXAMPLE: Print all items by name and cost per unit in this format:
// Unsweetened Almond Milk - $0.48 per oz.
for (let department in groceryOrderByDepartment) {
	for (let item of groceryOrderByDepartment[department]) {
		console.log(`${item.name} - $${item.costPerUnit} per ${item.unit}`);
	}
}

// EXAMPLE: Print full information for each item by department, including 
// sub-lists of the quantities available and their calculated costs
for (let department in groceryOrderByDepartment) {
	console.log('\n-----------------------------------');
	console.log(department.toUpperCase());
	console.log('-----------------------------------');
	for (let item of groceryOrderByDepartment[department]) {
		console.log(`\n${item.name} (SKU #${item.SKU})`);
		for (let quantity of item.quantities) {
			let unitText = item.unit === 'each' ? '' : `-${item.unit}`;
			let totalCost = Math.round(item.costPerUnit * quantity * 100) / 100;
			console.log(`  - ${quantity}${unitText} ${item.package} - $${totalCost}`);
		}
	}
}

// BONUS CHALLENGE!
// TODO: Write a function that prints a receipt for an order.
// The receipt should include the following, formatted however you'd like:
//   - Grocery store name of your choice
//   - Today's date and time (hint: Google JavaScript Date class)
//   - Cashier's first name and last initial (make it up)
//   - Each line item with a randomized quantity of the choices available and its calculated cost
//   - Subtotal, rounded to the penny
//   - Tax of 9.725%, rounded to the penny
//   - The grand total, rounded to the penny

// KEEP IT DRY: Reusable helper functions will be useful here!
