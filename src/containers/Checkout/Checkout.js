import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients : {
            salad:1,
            cheese:1,
            meat:2,
            bacon:3
        }
    };

    checkoutCancelled = () => {

        this.props.history.goBack();

    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    render () {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelled}
                checkoutContinued={this.checkoutContinued}/>
            </div>
        )
    }
}

export default Checkout;