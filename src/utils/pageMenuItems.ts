export const buyerMenu: IMenuItem[] = [
  {title: 'Katalog proizvoda', icon: 'explore', path: '/products-catalog'},
  {title: 'Moje porudžbine', icon: 'account_balance', path: '/buyer-orders'},
];

export const employeeMenu: IMenuItem[] = [
  {title: 'Proizvodi', icon: 'shopping_bag', path: '/product-overview'},
  {title: 'Porudžbine', icon: 'attach_money', path: '/order-overview'},
];

export const ceoMenu: IMenuItem[] = [
  {title: 'Zaposleni', icon: 'person', path: '/employee-overview'},
  {title: 'Proizvodi', icon: 'shopping_bag', path: '/product-overview'},
  {title: 'Porudžbine', icon: 'attach_money', path: '/order-overview'},
];
