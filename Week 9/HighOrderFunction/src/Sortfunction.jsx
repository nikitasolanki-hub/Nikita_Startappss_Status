// sort = Used to sort data.

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1500 }
];

function App() {
    // Important: use [...products] because sort() mutates original array.
  const sortedProducts = [...products].sort((a, b) => {
    return a.price - b.price;
  });

  return (
    <div>
      {sortedProducts.map((product) => (
        <h3 key={product.id}>
          {product.name} - ₹{product.price}
        </h3>
      ))}
    </div>
  );
}

export default App;