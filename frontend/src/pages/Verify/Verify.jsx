import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { baseUrl, token } = useContext(StoreContext);
  const navigate = useNavigate();
  const verifyPayment = async () => {
    setTimeout(async () => {
      const response = await axios.post(
        baseUrl + "/api/order/verify",
        {
          success,
          orderId,
        }
        // { headers: { token } }
      );
      console.log(response);
      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    }, 3000);
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
