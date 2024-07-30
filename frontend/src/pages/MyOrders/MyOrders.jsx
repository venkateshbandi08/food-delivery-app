import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/frontend_assets/assets";

const MyOrders = () => {
  const { baseUrl, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/order/userorders`,
        {},
        {
          headers: { token },
        }
      );
      setData(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error in fetching orders:", error);
      setError("Failed to fetch orders. Please try again later.");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [baseUrl, token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {error && <p className="error-message">{error}</p>}
        {data.map((order, index) => (
          <div key={index} className="my-orders-order">
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <p>
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity;
                } else {
                  return item.name + " x " + item.quantity + ", ";
                }
              })}
            </p>
            <p>Rs. {order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p>
              <span>&#x25cf;</span> <b>{order.status}</b>
            </p>
            <button onClick={fetchOrders}>Track Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
