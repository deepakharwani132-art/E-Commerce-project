import React from 'react'
import './web.css'
import { BrowserRouter, Link } from 'react-router-dom'


const category = [
  {
    id: 1,
    Image: "https://www.junaidjamshed.com/media/wysiwyg/jj-theme-9.jpg",
    title: "Men Fragrance",
    slug: 'Men Fragrance'
  },
  {
    id: 2,
    Image: "https://www.junaidjamshed.com/media/wysiwyg/jj-theme-4.jpg",
    title: "Kameez Shalwar",
    slug: 'Kameez Shalwar'
  },
  {
    id: 3,
    Image: "https://www.junaidjamshed.com/media/wysiwyg/jj-theme-8.jpg",
    title: "Skin Care",
    slug: 'Skin Care'
  },
  {
    id: 4,
    Image: "https://www.junaidjamshed.com/media/catalog/product/4/7/47464_4_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
    title: "KURTA TROUSER",
    slug: 'KURTA TROUSER'
  },
]


const Cat = () => {


  return (
    <>
      <h1 className='heading'>Our Categories</h1>
      <hr />

      <div className='cat'>

        <div className='img' key={category.id} >

          <Link to={`/Frag/${category.slug}`}>
            <img src={category[0].Image} className='img' alt="..." />
            <h4>{category[0].title}</h4>
          </Link>

          <Link to={`/Shalwar/${category.slug}`}>
            <img src={category[1].Image} className='img' alt="..." />
            <h4>{category[1].title}</h4>
          </Link>

          <Link to={`/Skin/${category.slug}`}>
            <img src={category[2].Image} className='img' alt="..." />
            <h4>{category[2].title}</h4>
          </Link>

          <Link to={`/Kurta/${category.slug}`}>
            <img src={category[3].Image} className='img' alt="..." />
            <h4>{category[3].title}</h4>
          </Link>

        </div>
      </div>

    </>
  )
}

export default Cat