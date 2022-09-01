import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your purchase!</h2>
        <p className="email-msg">
          A confirmation email will be sent to you shortly.
        </p>
        <p className="description">
          Any questions can be sent to:
          <a className="email" href="mailto:jonchoi11@gmail.com">
            jonchoi11@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Success;
