import React, { useEffect, useState } from "react";
import axios from "axios";

const Order = ({ id }) => {

  const [order, setOrder] = useState({
    price: null,
    products: []
  });

  async function getOrder(id) {
    let response = await axios.get(`http://localhost:4000/orders/${id}`);
    
    setOrder(response.data.data);
  }

  useEffect(() => {
    getOrder(id);
  }, []);

  return (
    <div className="container mt-3">
      <table className="table table-Light table-striped">
        <thead className="table-secondary">
          <tr className="text-center">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {order.products.map((product) => {
            return (
              <tr className="text-center">
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.order_line.count}</td>
              </tr>
            );
          })}
        </tbody>
        <th className="d-flex">Total price: ${order.price}</th>
      </table>
    </div>
  );
};

export default Order;
