import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Component {
    onToken = (token) => {
        console.log(token);
      };
    render() {
        return (
            
                <div className="App">
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_51Lpz9gSIl6vOTQSOzayI7U33gmwrqdTsBX53gBN5KJCAhRuhHLQbD1D751Vx6NvMykTWu6jbVg2LAGqGRHxs8ssd009Y6AWa9h"
        />
                {/* <h2>CASH ON DELEVRY AVAILABLE</h2>
                <h2>FOR FURTHER DETAILS</h2>
                <h2>MAIL:ANIMALWELFARE@GMAIL.COM</h2>
                <h1></h1> */}
            </div>
        );
    }
}

export default Payment;