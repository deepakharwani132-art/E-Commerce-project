
import { Button, Drawer } from 'antd';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
 const products = [{
    id: 5,
    title: "J. SUN PROTECTION CREAM",
    description: "Not for treating skin conditions.Patch test recommended.Consult a dermatologist for concerns.Discontinue if irritation occurs.",
    Image: "https://www.junaidjamshed.com/media/catalog/product/l/a/la_protection_3__1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    price: "-----Rs:4500-----"
  },
  {
    id: 4,
    title: "HAIR MIST J. POUR FEMME",
    description: "Fragranced hair without drynessProvides moistureReduces frizz ",
    Image: "https://www.junaidjamshed.com/media/catalog/product/p/o/pour_femee_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    price: "-----Rs:1800-----"
  },
  {
    id: 6,
    title: "SOOTHING TWILIGHT PERFUME HAND CREAM",
    description: "For general skincare only. Not for treating skin conditions.",
    Image: "https://www.junaidjamshed.com/media/catalog/product/l/a/la_generation_3__2.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    price: "-----Rs:1200-----"
  }]

const Skin = () => {
  
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

export default Skin