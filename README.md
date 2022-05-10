# react-localstorage
It's necessary to create React JS application, using only Typescript, React Router and React Context, that will show list of products and gets possibility for user adding desired products in his cart.

Keep away from unnecessary dependecies, keep it simple.

Getting started
Start client using yarn serve:client it will start on localhost:3000
Start server using yarn serve:server it will start on localhost:3001
API Documentation
http://localhost:3001/api/products/ (GET) - get list on products.

interface Product {
  name: string;
  category: Category;
  price: number;
}
http://localhost:3001/api/product/categories/ (GET) - get list of categories.

interface Category {
  id: string;
  name: string;
}
Todo:
Create page with list of products.
Fetch list of products.
Show all the products in a table.
Add possibility to add in cart.
Add possibility to remove from cart directly in list of products table.
Add posibility to sort products by categories and price by desc or asc.
Create page with list of added products.
Show all the added products in a table.
Add possibility to change quantity of added products.
Add possibility to remove added product.
Examples:
List of products example:

Category ^	Name	Price ^	Actions
Vegetables and legumes/beans	Broccoli	$0.25	(-) Select (+)
List of added products example:

Category	Name	Quantity	Price	Actions
Vegetables and legumes/beans	Broccoli	2	$0.50	(-) Remove (+)