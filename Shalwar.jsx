import { Button, Drawer } from 'antd';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const products=[
  
  {
  id: 8,
  title: "BLACK BLENDED CASUAL KAMEEZ SHALWAR",
  description: "Citrus, Cardamom, Apple, Lavender, Patchouli, Oakmoss               ",
  Image: "https://www.junaidjamshed.com/media/catalog/product/4/7/47445_1__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
  price: "-----Rs:8499-----",
  slug : "Shalwar"
  
},
{
  id: 9,
  title: "CASUAL KAMEEZ SHALWAR",
  description: "Citrus, Cardamom, Apple, Lavender, Patchouli, Oakmoss               ",
  Image: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjks-46717_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
  price: "-----Rs:8499-----",
  slug : "Shalwar"
}
]


const Shalwar = () => {
 
const { addToCart } = useContext(CartContext);


  return (
    <>
    
    <div className='main row row-cols-3' >
      
        {
          products.map(product => (
            <div className="card" style={{ "width": "20rem" }}>
       <Link to={`/product/${product.id}`}>
              <img src={product.Image} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <hr className='hr' />
                {/* <p className="card-text">{product.description}</p> */}

                <h2>{product.price}</h2>

                {/* <a  className="btn buynow btn-primary">Buy Now</a> */}
                <Link to="/">
    <button
       className="btn btn-primary"
       onClick={() => {
            addToCart(product);
            
          }}>Add to Cart</button></Link>
              </div>
            </div>

          ))
        }
      </div>

                  </>
  )
}

export default Shalwar