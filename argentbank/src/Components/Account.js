import React from "react";
import ViewButton from "../Components/ViewButton";

function Account({title, currency, amount, description}) {
    return  <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{currency}{amount}</p>
            <p className="account-amount-description">{description}</p>
        </div>
        <ViewButton/>
  </section>
}

export default Account