import { useContext, useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Drawer } from 'antd';
const { Meta } = Card;
import './web.css'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
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


const Home = () => {

  // const [cart, setCart] = useState([]);
  const [visible, setVisible] = useState(false);
const notify = () => toast("Product added to your Card!");
  


const { cart, addToCart, removeFromCart } = useContext(CartContext);

  //   const addToCart = (product) => {
  //   setCart([...cart, product]);
  //   alert("Product Added to Your Card...");
  // };



  // const removeFromCart = (productToRemove) => {
  //   setCart(cart.filter(product => product.id !== productToRemove.id));
  // };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace(/\D/g, '')); // Extract numbers from price string
      return total + price;
    }, 0);
  };


  


  return (
    <>
  
    <div id="carouselExampleAutoplaying" className="Container carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://static.vecteezy.com/system/resources/previews/011/593/340/non_2x/flash-sale-banner-template-design-for-web-or-social-media-vector.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://uicreative.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2019/11/23101302/web-banner-big-sale-fashion.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/men_23.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

 

      <video className="video" controls autoPlay muted loop>
        <source
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/videos/skincare_web.mp4"
          type="video/mp4"
        />
      </video>

      <h1 className='heading'>Our Best Selling Products...</h1>



      <div className="cart-icon" onClick={showDrawer}>
        <div count={cart.length}>
          <Button type="primary" shape="rectangle" size="25px">
            🛒
          </Button>
        </ div>
      </div>

      <hr />


      <div className='main row row-cols-3' >
        {
          products.map(product => (
            <div className="card" style={{ "width": "20rem" }} key={product.id}>
              <Link to={`/product/${product.id}`}>
              <img src={product.Image} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <hr className='hr' />
                {/* <p className="card-text">{product.description}</p> */}

                <h2>{product.price}</h2>

                {/* <a  className="btn buynow btn-primary">Buy Now</a> */}
                <a className='btn buynow btn-primary'
                  type="primary"
                  onClick={() => addToCart(product)}
                  style={{ marginLeft: '10px' }}
                >
                  Add to Cart
                </a ><ToastContainer />
              </div>
            </div>

          ))
        }
      </div>
      <Drawer
        title="Your Shopping Cart"
        placement="right"
        onClose={onClose}
        open={visible}
        width={400}
      >
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} style={{ marginBottom: '15px', borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' }}>
                <img src={item.Image} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }} />
                <div style={{ display: 'inline-block' }}>
                  <h4>{item.title}</h4>
                  <p>{item.price}</p>
                </div>
                <Button
                  type="danger"
                  onClick={() => removeFromCart(item)}
                  style={{ float: 'right' }}
                >
                  Remove
                </Button>
              </div>
            ))}
            <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
              Total: Rs {calculateTotal()}
            </div>
            <Button type="primary" block style={{ marginTop: '20px' }}>
              Proceed to Checkout
            </Button>
          </>
        )}
      </Drawer>




    </>


  )
}

export default Home



