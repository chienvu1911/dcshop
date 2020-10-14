import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="dc-home-page">
      <h1>Latest Products</h1>
      {loading ? (
        "Loading..."
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products && products.length > 0 && products.map((product, index) => (
            <Col sm={12} md={6} lg={4} xl={3} key={index}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomePage;
