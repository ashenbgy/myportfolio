import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address</span>Gampaha, Sri Lanka
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>ashenbhagye@gmail.com
      </p>
      {/* End .custom-span-contact */}

      {/* <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +94000000000">+00 000 000 000</a>
      </p> */}
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
