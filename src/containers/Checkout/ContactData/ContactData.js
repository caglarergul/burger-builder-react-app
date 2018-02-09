import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            caglar: 'deneme',
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Çağlar ERGÜL",
                address: {
                    street: "Ankara Aslfaltı cad.",
                    zipCode: "35000",
                    country: "Turkey"
                },
                email: "caglarergul@me.com"
            },
            deliveryMethod: "fastest"
        };

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
            })
            .catch(error => {
                this.setState({loading: false});
            });
    };

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>
                    Enter Your Contact Data
                </h4>
                <form>
                    <input type="text" name="name" placeholder="Your name"/>
                    <input type="email" name="email" placeholder="Your email"/>
                    <input type="text" name="street" placeholder="Street"/>
                    <input type="text" name="postal" placeholder="Postal code"/>
                    <br/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;