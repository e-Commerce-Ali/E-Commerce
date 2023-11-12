import React from 'react'
import belt from '../../assets/img/belt.webp'
import belt2 from '../../assets/img/belt2.jpg'
import wallet from '../../assets/img/wallet.jpg'
import shoe from '../../assets/img/shoe.jpg'
import './Products.css'

function Products() {

    const products = [
        {
            img_src: wallet,
            img_alt: "Cüzdan Resmi",
            product_name: "Cüzdanlar",
            path_name: "wallets",
            products_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis, praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis."
        },
        {
            img_src: belt,
            img_alt: "Kemer Resmi",
            product_name: "Kemerler",
            path_name: "belts",
            products_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis, praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis."
        },
        {
            img_src: shoe,
            img_alt: "Ayakkabı Resmi",
            product_name: "Ayakkabılar",
            path_name: "shoes",
            products_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis, praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis."
        }
    ]



    return (
        <div id='products'>
            <h2>
                ÜRÜNLERİMİZ
            </h2>
            <div className='container-products'>
                {
                    products.map((product) => (
                        <a className='single-product'>
                            <img className='img-fluid product-img' src={product.img_src} alt={product.img_alt} />
                            <h3 className='product-title'>{product.product_name.toUpperCase()}</h3>
                            <p className='product-desc'>{product.products_desc}</p>
                        </a>
                    ))
                }
            </div>
            <div className='more-than-info'>
                <p className='products-info'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem pariatur assumenda repudiandae illo quo repellendus aperiam consectetur iste aspernatur molestias!
                </p>
                <a className='products-more-button'>DAHA FAZLA</a>
            </div>
        </div>
    )
}

export default Products