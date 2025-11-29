import { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './web.css'
import { CartContext } from './CartContext';
import { message } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

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
  },
  {
    id: 4,
    title: "HAIR MIST J. POUR FEMME",
    description: "Fragranced hair without drynessProvides moistureReduces frizz ",
    Image: "https://www.junaidjamshed.com/media/catalog/product/p/o/pour_femee_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    price: "-----Rs:1800-----"
  },
  {
    id: 5,
    title: "J. SUN PROTECTION CREAM",
    description: "Not for treating skin conditions.Patch test recommended.Consult a dermatologist for concerns.Discontinue if irritation occurs.",
    Image: "https://www.junaidjamshed.com/media/catalog/product/l/a/la_protection_3__1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    price: "-----Rs:4500-----"
  },
  {
    id: 6,
    title: "SOOTHING TWILIGHT PERFUME HAND CREAM",
    description: "For general skincare only. Not for treating skin conditions.",
    Image: "https://www.junaidjamshed.com/media/catalog/product/l/a/la_generation_3__2.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    price: "-----Rs:1200-----"
  },
  {
    id: 7,
    title: "BROWN COTTON PLAIN KURTA TROUSER",
    description: "Citrus, Cardamom, Apple, Lavender, Patchouli, Oakmoss               ",
    Image: "https://www.junaidjamshed.com/media/catalog/product/4/7/47464_4_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
    price: "-----Rs:8499-----"
  },
  {
    id: 8,
    title: "BLACK BLENDED CASUAL KAMEEZ SHALWAR",
    description: "Citrus, Cardamom, Apple, Lavender, Patchouli, Oakmoss               ",
    Image: "https://www.junaidjamshed.com/media/catalog/product/4/7/47445_1__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
    price: "-----Rs:8499-----"
  },
  {
    id: 9,
    title: "CASUAL KAMEEZ SHALWAR",
    description: "Citrus, Cardamom, Apple, Lavender, Patchouli, Oakmoss               ",
    Image: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjks-46717_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
    price: "-----Rs:8499-----"
  }
  ]

const Product = () => {

const notify = () => toast("Wow so easy!");

    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const product = products.find(p => p.id === parseInt(id));
  
    if (!product) return <h2>Product not found</h2>;

    
    
   
  return (
<>

    <div className="product-detail-container">
    <img src={product.Image} alt={product.title} className="product-detail-image" />
    <div className="product-detail-info">
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
      <p>{product.description}</p>
      <Link to="/">
    <button
       className="btn btn-primary"
       onClick={() => {
            addToCart(product);
           notify()
          }}>Add to Cart</button></Link><ToastContainer />
    
    </div>
  </div>
  </>
);
}
  export default Product