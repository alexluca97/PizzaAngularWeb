import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: Product[];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Pizza Quatro Stagioni',
        description: 'Pizza quattro stagioni (four seasons pizza) is a variety of pizza in Italian cuisine that is prepared in four sections with diverse ingredients, with each section representing one season ofthe year. It is a very popular pizza in Italy and has been described as a "classic", "famous"and "renowned" Italian pizza.',
        ingredients: ['blat', 'ulei de măsline', 'salsa di pomodoro', 'mozzarella', 'salam', 'şuncă', 'ciuperci', 'măsline verzi', 'şuncă presată'],
        type: [['mica', '25cm', 23.15], ['medie', '36cm', 28.00], ['mare', '42cm', 42.00]]
      },
      {
        id: 2,
        name: 'Pizza Quatro Formaggi',
        description: 'Quattro Formaggi is the debut release by rock trio Dogstar.',
        ingredients: ['blat', 'ulei de măsline', 'salsa di pomodoro', 'extra mozzarella', 'gorgonzola', 'parmezan', 'mascarpone'],
        type: [['mica', '25cm', 23.15], ['medie', '36cm', 28.00], ['mare', '42cm', 42.00]]
      }, 
      {
        id: 3,
        name: 'Pizza Diavola',
        description: 'The best pizza',
        ingredients: ['blat', 'ulei de măsline', 'salsa di pomodoro', 'mozzarella', 'extra salam uscat', 'ardei iute'],
        type: [['mica', '25cm', 23.15], ['medie', '36cm', 28.00], ['mare', '42cm', 42.00]]
      },
      {
        id: 4,
        name: 'Pizza Margherita',
        description: 'Pizza Margherita is a typical Neapolitan pizza. Traditionally, it is made with fior di latte (cow\'s milk mozzarella) rather than buffalo mozzarella.',
        ingredients: ['blat', 'ulei de măsline', 'salsa di pomodoro', 'extra mozzarella', 'roşii cherry'],
        type: [['mica', '25cm', 23.15], ['medie', '36cm', 28.00], ['mare', '42cm', 42.00]]
      },
      {
        id: 5,
        name: 'Pizza Funghi e prosciutto',
        description: 'Pizza Prosciutto e Funghi is a limited main dish. It was Pizza Prosciutto e Funghi only available from March 22 to April 12, 2011. It begins at level 0 and unlocks only after PizzaQuattro Stagioni is mastered. To achieve level 10 in this dish, you need 10 mushroom, 10 ham, 10 salt, and 10 flour.',
        ingredients: ['blat', 'ulei de măsline', 'salsa di pomodoro', 'extra mozzarella', 'gorgonzola', 'prosciutto crudo', 'ciuperci'],
        type: [['mica', '25cm', 23.15], ['medie', '36cm', 28.00], ['mare', '42cm', 42.00]]
      },
      {
        id: 6,
        name: 'Pizza Vegetariana',
        description: 'The best pizza',
        ingredients: ['blat', 'ulei de măsline', 'salsa di pomodoro', 'caşcaval vegetal', 'ciuperci', 'ardei gras', 'porumb', 'ananas', 'măsline feliate', 'roşii'],
        type: [['mica', '25cm', 23.15], ['medie', '36cm', 28.00], ['mare', '42cm', 42.00]]
      }
    ]
  }

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(id) {
    var index = this.products.indexOf(id);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}
