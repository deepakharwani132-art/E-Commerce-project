import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Badge, Drawer } from 'antd';
const { Meta } = Card;
import './web.css';

const Home = () => {
  const [cart, setCart] = useState([]);
  const [visible, setVisible] = useState(false);

  const products = [
    {
      id: 1,
      title: "Zarar Gold",
      description: "Fruity, Sweet, Leather, Smoky, Woody",
      Image: "https://www.junaidjamshed.com/media/catalog/product/z/a/zarar_gold_1__1.jpg?width=420&height=560&canvas=420,560&optimize=medium&bg-color=255,255,255&fit=bounds",
      price: "-----Rs:7500-----"
    },
    // ... (rest of your products array remains the same)
    {
      id: 9,
      title: "CASUAL KAMEEZ SHALWAR", 
      description: "Citrus, Cardamom, Apple, Lavender, Patchouli, Oakmoss               ",
      Image: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjks-46717_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
      price: "-----Rs:8499-----"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product.id !== productToRemove.id));
  };

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
      <div className="cart-icon" onClick={showDrawer}>
        <Badge count={cart.length}>
          <Button type="primary" shape="circle" size="large">
            🛒
          </Button>
        </Badge>
      </div>

      <video className="video" controls autoPlay muted loop>
        <source 
          src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/videos/skincare_web.mp4" 
          type="video/mp4" 
        />
      </video>

      <h1 className='heading'>Our Best Selling Products...</h1>
      <hr /> 

      <div className='main row row-cols-3'>
        {products.map(product => (
          <div className="card" style={{ "width": "20rem" }} key={product.id}>
            <img src={product.Image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <hr className='hr' />
              <h2>{product.price}</h2>
              <a className="btn buynow btn-primary">Buy Now</a>
              <Button 
                type="primary" 
                onClick={() => addToCart(product)}
                style={{ marginLeft: '10px' }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Drawer
        title="Your Shopping Cart"
        placement="right"
        onClose={onClose}
        visible={visible}
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
  );
}

export default Home;