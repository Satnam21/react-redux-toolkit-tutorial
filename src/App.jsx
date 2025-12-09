import './App.css'
import Header from './components/Header/Header'
import Product from './components/Product/Product'

function App() {

  return (
    <>
    <div>
      <Header />
      <div className="product-grid-container">
      <Product name="Wireless Mouse" price="$49.99" image="https://uniquec.com/wp-content/uploads/235-600x600.jpg" />
      <Product name="Modem" price="$249.99" image="https://t3.ftcdn.net/jpg/15/39/41/62/360_F_1539416237_LWSgjkPouwhl955Bj3IxvoLd8YgUHKpO.jpg" />
      <Product name="Wireless Keyboard" price="$149.99" image="https://shop.zebronics.com/cdn/shop/files/Zeb-K5002MW-pic1_b20858ce-1b0c-4973-b3c6-2a824d76bf4c.jpg?v=1729670202&width=2000" />
      <Product name="Wireless Headphone" price="$199.99" image="https://shop.zebronics.com/cdn/shop/files/Zeb-Thunderpro-blue-pic-1.jpg?v=1709202990&width=1200" />
      <Product name="Power Bank" price="$49.99" image="https://www.boat-lifestyle.com/cdn/shop/files/Artboard7-2_600x.jpg?v=1704271431" />

      </div>
    </div>     
    </>
  )
}

export default App
