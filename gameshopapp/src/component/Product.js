import React, {useState} from 'react';
import Cart from './Cart';
import Rating from './Rating';


const Product = ({info}) => {
    const [num, setNum] = useState(0);
    const [total, setTotal] = useState(0.00);
    const [cartItems, setItems] = useState([]);
    const [cart, setCart] = useState(null);
    const handleIncr = (element) => {
        setNum(num + 1);
        let previousCartItems = cartItems;
        let index;
        let existingItem = previousCartItems.find((x, i) => {
            index = i;
            return x.id === element.id;
        });
        if (existingItem) {
            existingItem.quantity += 1;
            previousCartItems[index] = existingItem;
        }
        else {
            element.quantity = 1;
            previousCartItems.push(element);
        }
        let price = total + element.price;
        setTotal(price);
        setItems(previousCartItems);
    }
    return (
        <>
           <section className="main-container">
                        <div className="card-game">
             {
                info.map((curElem, index) => {
                    return (
                        <>
                   
                    <div className="inside-card" key={index}>
                    <img src={curElem.image} alt="Game1" />
                   
                    <h2>{curElem.title}</h2>
                    <h4>{curElem.publisher}</h4>
                    <p className="rating">
                    <Rating  value={curElem.rating}/>
                    </p>
                    
                    <p className="price">${curElem.price}</p>
                                <button onClick={() => { handleIncr(curElem) }}><i className="fas fa-cart-arrow-down"></i>Add to cart</button>
                  </div>
                  
             
                        </>
                    )
                    
                })
             }
             </div>
             <div className="cart-amount">
                    <h1>Your Cart</h1>
                    <p>Total Item npmSelected: {num} </p> 
                    {cartItems.length !== 0 ?
                        cartItems.map(item => {
                        return <Cart item = {item}/>
                    })
                    : null}
                    <p>Total price: ${total.toFixed(2)}</p>

                  </div> 
                  
               </section>
         
        </>
    )
}

export default Product;
