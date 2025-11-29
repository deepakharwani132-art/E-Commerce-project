import { Button, Drawer } from 'antd';
import React, { useState } from 'react'
import './web.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

 const products = [{
        id: 1,
        title: "Zarar Gold",
        description: "Fruity, Sweet, Leather, Smoky, Woody",
        Image: "https://www.junaidjamshed.com/media/catalog/product/z/a/zarar_gold_1__1.jpg?width=420&height=560&canvas=420,560&optimize=medium&bg-color=255,255,255&fit=bounds",
        price: "-----Rs:7500-----"
      },
      {
        id: 2,
        title: "J.EXCLUSIVE",
        description: "Citrus, Lavender, Patchouli, Vanilla, Woody, Ambry",
        Image: "https://www.junaidjamshed.com/media/catalog/product/e/x/exclusive_1__2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
        price: "-----Rs:4300-----"
      },
      {
        id: 3,
        title: "J.SPARK",
        description: "Citrus, Grapefruit, Rosemary, Cardamom, Vetiver, Leather, Animalic",
        Image: "https://www.junaidjamshed.com/media/catalog/product/2/_/2_24_179_1_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
        price: "-----Rs:5000-----"
      }]


const Frag = () => {
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

export default Frag