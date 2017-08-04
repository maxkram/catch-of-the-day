/*
  добавить пиццу
  <AddPizzaForm />
*/

import React from 'react';

var AddPizzaForm = React.createClass({
  createPizza : function(event) {
    // 1. не подавать форму
    event.preventDefault();
    // 2. взять из форму и сделать объект
    var Pizza = {
      name : this.refs.name.value,
      price : this.refs.price.value,
      status : this.refs.status.value,
      desc : this.refs.desc.value,
      image : this.refs.image.value
    }

    // 3. Add the Pizza to the App State
    this.props.addPizza(Pizza);
    this.refs.PizzaForm.reset();
  },
  render : function() {
    return (
      <form className="Pizza-edit" ref="PizzaForm" onSubmit={this.createPizza}>
        <input type="text" ref="name" placeholder="Pizza Name"/>
        <input type="text" ref="price" placeholder="Pizza Price" />
        <select ref="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" ref="desc" placeholder="Desc"></textarea>
        <input type="text" ref="image" placeholder="URL to Image" />
        <button type="submit">+ Add Item </button>
      </form>
    )
  }
});

export default AddPizzaForm;
