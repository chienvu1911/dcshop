import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
       const fetchProducts = async () => {
           const { data } = await axios.get('/api/products')
           setProducts(data);
       }

       fetchProducts();
    }, [])

    return (
        <div className="dc-home-page">
            <h1>Latest Products</h1>
            <Row>
                {
                    products.map((product, index) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={index}>
                            <Product product={product} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default HomePage
