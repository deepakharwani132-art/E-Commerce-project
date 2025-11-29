import { Button, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const Kurta = () => {

     

   const products= [
         {
        id: 7,
        title: "BROWN COTTON PLAIN KURTA TROUSER",
        description: "Citrus, Cardamom, Apple, Lavender, Patchouli, Oakmoss               ",
        Image: "https://www.junaidjamshed.com/media/catalog/product/4/7/47464_4_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
        price: "-----Rs:8499-----"
      },
      {
        id: 8,
        title: "BLACK BLENDED CASUAL KURTA TROUSERS",
        description: "A neat and comfortable black blended casual kurta trousers set designed for everyday wear. Its simple look makes it easy to style for casual gatherings or regular use.",
        Image: "https://www.junaidjamshed.com/media/catalog/product/3/0/30778_1__1_6.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
        price: "-----Rs:5990-----"
      }
    ]


const { addToCart } = useContext(CartContext);
 

  return (
<>
    
   <div className='main row row-cols-3' >
    

        {
          products.map(product => (
            <div className="card" style={{ "width": "20rem" }}>
                 <Link to={`/product/${product.id}`}>
              <img src={product.Image} className="card-img-top" alt="..." /></Link>
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

export default Kurta