/*
  Pizza
  <Pizza />
*/

import React from 'react';
import h from '../helpers';
import autobind from 'autobind-decorator';

@autobind
class Pizza extends React.Component {
  
  onButtonClick() {
    console.log("Добавляем пиццу: ", this.props.index);
    var key = this.props.index;
    this.props.addToOrder(key);
  }
  
  render() {
    var details = this.props.details;
    var isAvailable = (details.status === 'available' ? true : false);
    var buttonText = (isAvailable ? 'Добавить в заказ' : 'Продано!');
    return (
      <li className="menu-pizza">
        <img src={details.image} alt={details.name} />
        <h3 className="pizza-name">
          {details.name}
          <span className="price">{h.formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isAvailable} onClick={this.onButtonClick}>{buttonText}</button>
      </li>
    )
  }
};


export default Pizza;
