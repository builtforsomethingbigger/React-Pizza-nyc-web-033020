import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import Pizza from './components/Pizza';
class App extends Component {

  state = {
    pizzas: [],
    pizzaInForm: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({ pizzas }))
  }

  onClick = e => {
      const pizzaId = e.target.name
      const pizzaToEdit = this.state.pizzas[pizzaId - 1]
      this.setState({ pizzaInForm: pizzaToEdit })
      // console.log(this.state.pizzaInForm)
  }

  change = e => {
    this.setState({ 
      pizzaInForm: {...this.state.pizzaInForm, [e.target.name]: e.target.value}
     })
  }

  submitHandler = e => {
    const pizzaId = e.target.name
    console.log(pizzaId)
    e.preventDefault()
    fetch(`http://localhost:3000/pizzas/${pizzaId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state.pizzaInForm)
    })
    
      .then(res => res.json())
  }

  render() {

    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaInForm={this.state.pizzaInForm} change={this.change} submit={this.submitHandler}/>
        <PizzaList pizzas={this.state.pizzas} onClick={this.onClick}/>
      </Fragment>
    );
  }
}

export default App;
 