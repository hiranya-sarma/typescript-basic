const pizza = {
  name: 'Pepperoni',
  toppings: ['pepperoni']
};

function order({ name: a, toppings: b }) {
  return { a, b };
}

const { a, b } = order(pizza);
//console.log(b);

const toppings = ['pepe', 'bac', 'chill'];
const [a1, a2, a3] = toppings;

function logToppings([a1, a2, a3]: any) {
  console.log(a1, a2, a3);
}
logToppings(toppings);
