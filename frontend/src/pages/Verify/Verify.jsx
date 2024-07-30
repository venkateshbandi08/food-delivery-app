import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { baseUrl, token } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(
        baseUrl + "/api/order/verify",
        {
          success,
          orderId,
        },
        { headers: { token } }
      );
      console.log(response);
      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      navigate("/");
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      verifyPayment();
    }, 3000);

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, [baseUrl, token, success, orderId, navigate]);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
