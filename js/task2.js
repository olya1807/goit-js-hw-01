const invoice = 100;
const stock = 100;
const text1 = `Заказ оформлен, с вами свяжется менеджер`;
const text2 = `На складе недостаточно товаров!`;

// Write code under this line
const message = stock >= invoice ? text1 : text2;

//console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'
