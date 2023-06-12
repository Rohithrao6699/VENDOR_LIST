import { useState } from 'react'
import Footer from './Adding'
import './App.css'

let ProductRow = ({ items }) => {
const [index, setindex] = useState(-1)
const [clicked, setclicked] = useState(false)
const [selecteditem, setselecteditem] = useState(null)
const [cartvalue, setcartvalue] = useState([])

console.log(items)

const handleclick = () => {
    setindex(index + 1)
}

const handleAdd = (item) => {
    console.log(item)
   setclicked(true)
   setselecteditem(item)
    setcartvalue([...cartvalue, item])
}
return(
    <>
    <h1 className='Header'>Items</h1>
    <button onClick={handleclick} className='First-add'>Add</button>
    {index < items.length ? (
        <div>
          {items.map((item, i) => {
            if (i <= index) {
              return <span key={item.id} className="product-row">
              <p className="product-name">{item.name}</p>
              <p className="product-price">Price: {item.price}¢</p>
              <button className="add-button" onClick={() => handleAdd(item)}>Add</button>
              {item === selecteditem && (clicked && item.stocked ? <p className="added-to-cart">Added to cart</p> : clicked && <p className="not-in-stock"> Soryy! Not in stock</p>)}
            </span>
            }
            return null;
          })}
        </div>
      ) : setindex(-1)
      }
      <Footer cartvalue={cartvalue}/> 
    </>
)
}



export default ProductRow;