//Reduce = Used to calculate one final value.

const cart = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 }
]


export default function Reducefunction() {
    const totalPrice = cart.reduce((total, item) => {
        return total + item.price;
    }, 0);

  return (
    <div>
        <h1> Total: {totalPrice}</h1>
      
    </div>
  ); 
}
