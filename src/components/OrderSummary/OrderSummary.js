import React ,{Component} from 'react';
import Aux from '../../hoc/Aux'
import Button from '../UI/Button/Button'

class OrderSummary extends Component  {
    componentWillUpdate() {
        console.log('[OrderSummary] Will Update');
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
    .map(key => {
        return (
        <li key={key}>
            <span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
            </li>);
    },);
        return (
        <Aux>
            <h3>Your Order</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success'clicked={this.props.purchasedContinued}>CONTINUE</Button>
        </Aux>);
    }
}

export default OrderSummary;