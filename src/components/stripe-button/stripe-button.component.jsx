import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HQrsnHH7HSedPpeTGQBKFMuq0KHbhzbkZFydaS26hns7RJ0A6pqhlpD16cbu2i9E6sDaN66BZIs2TvguhxZ6Mps00EbIsffX4";

    const onToken = token => {
        alert("Payment Successful")
    }

    return (
        <StripeCheckout
            label = "Pay Now"
            name = "CRWN Clothing"
            billingAddress
            shippingAddress
            image = "https://sendeyo.com/up/d/f3eb2117da"
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = "Pay Now"
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;