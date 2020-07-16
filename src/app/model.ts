var model = {
  user: 'Григорий',
  items: [{shoppingitem: 'Хлеб', done: false},
    {shoppingitem: 'Хлеб', done: false},
    {shoppingitem: 'Молоко', done: false},
    {shoppingitem: 'Селедка', done: true},
    {shoppingitem: 'Шоколад', done: false},
    {shoppingitem: 'Корм', done: true},
  ]
};

export class Model {
  user;
  items;

  constructor() {
    this.user = 'Григорий';
    this.items = [new TodoShoppingItem('Хлеб', false),
      new TodoShoppingItem('Хлеб', false),
      new TodoShoppingItem('Хлеб', false),
      new TodoShoppingItem('Хлеб', false),
      new TodoShoppingItem('Хлеб', false),
      new TodoShoppingItem('Хлеб', false),
    ];


  }
}

export class TodoShoppingItem {
  shoppingitem;
  done;

  constructor(shoppingitem, done) {
    this.shoppingitem = shoppingitem;
    this.done = done;
  }
}

