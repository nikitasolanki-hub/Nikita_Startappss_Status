//  Filter = Used to show selected data.

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1500 }
] ;

export default function Filterfunction() {

    const expensiveProducts = products.filter((product) => {
        return product.price > 1000 ;
    });
  return (
   <div>
      {expensiveProducts.map((product) => (
        <h3 key={product.id}>
          {product.name} - ₹{product.price}
        </h3>
      ))}
    </div>
  )
}
