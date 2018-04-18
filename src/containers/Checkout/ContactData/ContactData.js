import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component {

    state = {
        orderForm: {
              name: {
                elementType: 'input',
                elementConfig: {
                  type: 'text',
                  placeholder: 'Your Name'
                },
                value: ''
              },
              street: {
                elementType: 'input',
                elementConfig: {
                  type: 'text',
                  placeholder: 'Street'
                },
                value: ''
              },
              zipCode: {
                elementType: 'input',
                elementConfig: {
                  type: 'text',
                  placeholder: 'Zip Code'
                },
                value: ''
              },
              country: {
                elementType: 'input',
                elementConfig: {
                  type: 'text',
                  placeholder: 'Country'
                },
                value: ''
              },
              email: {
                elementType: 'email',
                elementConfig: {
                  type: 'text',
                  options: [{value: 'fastest', displayValue: 'Fastest'},{value: 'cheapest', displayValue: 'Cheapest'}]
                },
                value: ''
              },
              deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                  type: 'text',
                  placeholder: 'Delivery Method'
                },
                value: ''
              },
              loading: false
            }
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
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
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({loading: false});
            });
    };

    render() {
        let form  = (
            <form>
                <Input elementType="..." elementConfig="" value="..."/>
                <Input inputtype="input" placeholder="Your email"/>
                <Input inputtype="input" placeholder="Street"/>
                <Input inputtype="input" placeholder="Postal code"/>
                <br/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>
                    Enter Your Contact Data
                </h4>
                {form}
            </div>
        )
    }
}

export default ContactData;
