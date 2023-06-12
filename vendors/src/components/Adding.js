import { useEffect, useState } from "react"
import './Cart.css'

function Footer({cartvalue}) {
const [price, setprice] = useState(0)

useEffect(() => {
    let sum = 0;
    cartvalue.forEach((item) => {
        if(item.stocked) {
            sum += item.price;
        }})
        setprice(sum);
}, [cartvalue]);
    return(
        <>
        <div className="footer">
         <h2 className="cart-title">Cart</h2>
            {cartvalue.map((item) =>{
            if(item.stocked){        
                return <p key={item.id} className="cart-item">{item.name}</p>
            }
                return null;
            } 
            )}
        <p className="total-price">Total Price: {price}¢</p>
        </div>
        </>
    )
}
export default Footer;
