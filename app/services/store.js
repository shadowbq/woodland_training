import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

const products = [
  Product.create({title: 'Tent', price: 10}),
  Product.create({title: 'Sleeping Bag', price: 3}),
  Product.create({title: 'Flashlight', price: 5}),
  Product.create({title: 'First Aid Kit', price: 1})
];

const orders = [
  Order.create({id: '1234', name: 'Blasie Blobfish',
    items: [
      LineItem.create({product: products[0], quantity:1}),
      LineItem.create({product: products[1], quantity:1}),
      LineItem.create({product: products[3], quantity:2})
    ]
  })
];

export default Ember.Service.extend({

  /*getOrderById(id) {
    const order = this.getOrders();
    return orders.findBy('id', id);
  },

  getOrders() {
    return [
     { id: '1', name: 'Nate' },
     { id: '2', name: 'John' }
   ];
 },*/

  getOrderById(id) { return orders.findBy('id', id); },
  getOrders() { return orders; },
  getProducts() { return products; }

});
