import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataContext } from '../Context';

const DetailPage = () => {

    const MainContext = useContext(DataContext)
    const params = useParams();
    const [products, setProducts] = useState(MainContext.products)
    const [mainProduct, setMainProduct]= useState([])

    useEffect(() => {
        if(params.id) {
            const data = products.filter(item =>{
                return item.id === params.id
            })
            setMainProduct(data)
        }
    }, [])

  return (
    <div>
      {
        mainProduct.map(item =>(
            <div className="details" key={item.id}>
                <img src={item.src} alt=""/>
                <div className="box">
                    <div className="row">
                        <h2>{item.title}</h2>
                        <span>${item.price}</span>
                    </div>
                    
                    <p>{item.description}</p>
                    <p>{item.content}</p>
                    <Link to="/cart" className="cart" onClick={() => MainContext.addCart(item.id)}>
                        Add to cart
                    </Link>
                </div>
            </div>
        ))
        }
  </div>
  )
}

export default DetailPage
